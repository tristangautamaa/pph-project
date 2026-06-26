// One-off image compressor for the Pusun ball-machine photos.
//
// Converts the three source JPGs to width-capped, high-quality WebP next to the
// originals. The files live in public/images/portrait/ (that is where they were
// copied from C:\PPH-Project\Portrait in an earlier pass) — they are portrait-
// orientation photos, so the "portrait" folder is the correct home for them.
//
// Run with:  node scripts/compress-images.mjs

import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "images", "portrait");
const FILES = ["ST307814.JPG", "ST307823.JPG", "ST307825.JPG"];
const MAX_WIDTH = 1400;
const QUALITY = 82;

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

for (const file of FILES) {
  const input = path.join(DIR, file);
  const output = path.join(DIR, file.replace(/\.jpe?g$/i, ".webp"));

  const before = (await stat(input)).size;

  await sharp(input)
    .rotate() // bake in EXIF orientation before stripping metadata to WebP
    .resize({ width: MAX_WIDTH, withoutEnlargement: true }) // cap width, never upscale
    .webp({ quality: QUALITY })
    .toFile(output);

  const after = (await stat(output)).size;
  const saved = Math.round((1 - after / before) * 100);

  console.log(`${file}  ->  ${path.basename(output)}`);
  console.log(`   before ${mb(before)}   after ${mb(after)}   (${saved}% smaller)\n`);
}

console.log("Done.");
