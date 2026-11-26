#!/usr/bin/env node
// Checks vendored skills against the upstream repo they were copied from.
//
// A skill that was copied in from somewhere else carries an `upstream.json`
// beside its SKILL.md recording the repo, the path and the commit it was
// taken from, plus the git blob SHA of every file copied. This script asks
// GitHub what those files look like now and reports anything that moved, so
// a translated or adapted copy never drifts from its source unnoticed.
//
// Usage:
//   node scripts/check-upstream.mjs           # report drift, exit 1 if any
//   node scripts/check-upstream.mjs --quiet   # only report drift
//
// Set GITHUB_TOKEN to raise the API rate limit.

import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const quiet = process.argv.includes("--quiet");
const token = process.env.GITHUB_TOKEN;

function* manifests(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* manifests(path);
    else if (entry.name === "upstream.json") yield path;
  }
}

async function api(url) {
  const headers = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  return res.json();
}

// The blob SHA of a file as it exists upstream right now.
async function upstreamBlobSha({ repo, path }, file) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}/${file}?ref=HEAD`;
  const body = await api(url);
  if (body.type !== "file") {
    throw new Error(`${file} is a ${body.type} upstream, expected a file`);
  }
  return body.sha;
}

const drift = [];
const errors = [];
let checked = 0;

for (const manifestPath of manifests(join(root, "skills"))) {
  const skillDir = join(manifestPath, "..");
  const where = relative(root, skillDir);
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch (error) {
    errors.push(`${where}: upstream.json is not valid JSON (${error.message})`);
    continue;
  }

  for (const [file, pinnedSha] of Object.entries(manifest.files ?? {})) {
    checked += 1;
    try {
      const current = await upstreamBlobSha(manifest, file);
      if (current !== pinnedSha) {
        drift.push(`${where}/${file}: upstream changed (pinned ${pinnedSha.slice(0, 12)}, now ${current.slice(0, 12)})`);
      }
    } catch (error) {
      errors.push(`${where}/${file}: ${error.message}`);
    }
  }

  if (!quiet) {
    const count = Object.keys(manifest.files ?? {}).length;
    console.log(`${where}: ${manifest.repo}@${manifest.commit.slice(0, 12)} (${count} files, ${manifest.commitDate ?? "unknown date"})`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} file(s) could not be checked. A 404 usually means the file moved or was renamed upstream.`);
  process.exit(1);
}

if (drift.length > 0) {
  console.error(drift.join("\n"));
  console.error(
    `\n${drift.length} vendored file(s) differ from upstream. Re-read the upstream diff before updating: the local copies are translated and adapted, so upstream changes have to be applied by hand, not copied over. When done, update the SHAs in upstream.json.`,
  );
  process.exit(1);
}

console.log(`\nAll ${checked} vendored file(s) match their pinned upstream SHAs.`);