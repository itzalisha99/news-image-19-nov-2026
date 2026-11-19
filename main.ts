// "The World in One Day" — Thursday 19 November 2026.
// A newspaper front page for the make.fun news-image-20261119 bounty.
// The picture lives in entry.png next to this file (1024x1024, drawn
// for this day only). This program's whole job is to place that exact
// picture at /output/entry.png for the grader, after proving it is a
// complete PNG inside the competition's size limits.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

const bytes = readFileSync(source);

// A PNG always opens with these eight magic bytes.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error("entry.png is larger than 1 MiB");
}
// Bytes 16-23 of a PNG header hold its width, then its height.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);
}

// A plain copy: no clock, no dice, no network, so run one and run two
// write the same bytes every time. The picture is fixed at build time;
// nothing here is generated, fetched or changed at run time.
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
