import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const usedImages = {
  landscape: [
    "dji_fly_20260608_150122_0015_1780905739959_photo.JPG",
    "ST307560.jpg",
    "ST307593.jpg",
    "ST307631.jpg",
    "ST307638.jpg",
    "ST307664.jpg",
    "ST307665.jpg",
    "ST307673.jpg",
    "ST307714.jpg",
    "ST307716.jpg",
    "ST307723.jpg",
    "ST307737.jpg",
    "ST307745.jpg",
    "ST307778.jpg",
    "ST307783.jpg",
    "ST307839.jpg",
    "ST307841.jpg",
    "ST307847.jpg",
    "ST307854.jpg",
    "ST307862.jpg",
    "ST308179.jpg",
    "ST308228.jpg",
    "ST308240.jpg",
    "ST308241.jpg",
    "ST308412.jpg",
    "ST308500.jpg",
    "ST308512.jpg",
  ],
  portrait: [
    "ST307512.JPG",
    "IMG_6323.jpg",
    "IMG_6331.jpg",
    "IMG_6332.jpg",
    "IMG_6347.jpg",
  ],
  logo: [
    "Poncol Padel House Logo - Transparency White.png",
    "Poncol Padel House Logo - Transparency Black.png",
    "Poncol Padel House Logo.jpg",
  ],
  courtside: ["Courtside1.png"],
};

const srcBase = "C:/PPH-Project/public/images";
const outBase = "C:/PPH-Project/public/images-opt";

async function compressImage(srcPath, outPath, type) {
  try {
    const ext = extname(srcPath).toLowerCase();
    const isLandscape = type === "landscape";
    const isPng = ext === ".png";

    let pipeline = sharp(srcPath);

    // Resize: landscape max 2400px wide, portrait max 1400px wide
    const maxWidth = isLandscape ? 2400 : 1400;
    pipeline = pipeline.resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    });

    if (isPng) {
      pipeline = pipeline.png({ quality: 85, compressionLevel: 9 });
      await pipeline.toFile(outPath.replace(extname(outPath), ".png"));
    } else {
      pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true });
      await pipeline.toFile(outPath);
    }

    const srcSize = (await stat(srcPath)).size / 1024 / 1024;
    const outSize = (await stat(outPath)).size / 1024 / 1024;
    console.log(
      `✓ ${basename(srcPath)}: ${srcSize.toFixed(1)}MB → ${outSize.toFixed(1)}MB`
    );
  } catch (err) {
    console.error(`✗ ${basename(srcPath)}: ${err.message}`);
  }
}

async function run() {
  let total = 0;
  let compressed = 0;

  for (const [folder, files] of Object.entries(usedImages)) {
    const outDir = join(outBase, folder);
    await mkdir(outDir, { recursive: true });

    for (const file of files) {
      const srcPath = join(srcBase, folder, file);
      const outPath = join(outDir, file);
      await compressImage(srcPath, outPath, folder);
      total++;

      try {
        const size = (await stat(outPath)).size / 1024 / 1024;
        compressed += size;
      } catch {}
    }
  }

  console.log(`\nDone: ${total} images → ${compressed.toFixed(1)} MB total`);
}

run().catch(console.error);
