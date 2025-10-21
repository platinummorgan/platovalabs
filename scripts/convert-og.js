const fs = require('fs');
const sharp = require('sharp');

const svgPath = 'public/og.svg';
const outPath = 'public/og.png';

(async () => {
  try {
    const svg = await fs.promises.readFile(svgPath, 'utf8');
    const buffer = Buffer.from(svg);
    await sharp(buffer)
      .png({ quality: 90 })
      .resize(1200, 630, { fit: 'cover' })
      .toFile(outPath);
    console.log('Wrote', outPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
