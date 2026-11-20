import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies VIDEO.json from this repository into the grader's output directory.
// That is the program's whole job: the house reads the video itself through
// the YouTube Data API, so nothing about the video is computed here.
const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

const source = join(botDir, "VIDEO.json");

// Fail loudly (instead of copying a broken file) when VIDEO.json is not
// a JSON object with a url string.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
