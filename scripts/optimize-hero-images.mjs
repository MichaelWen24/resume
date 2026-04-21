import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const root = process.cwd();
const sourceDir = path.join(root, 'src/images');
const outDir = path.join(sourceDir, 'hero-optimized');

const files = ['IMG_4473.jpeg', 'IMG_6599.jpeg', 'IMG_4434.jpeg', 'IMG_2567.jpeg', 'IMG_2565.jpeg'];

await fs.mkdir(outDir, {recursive: true});

for (const file of files) {
  const input = path.join(sourceDir, file);
  const basename = path.basename(file, path.extname(file));
  const output = path.join(outDir, `${basename}-hero.jpg`);

  await sharp(input)
    .rotate()
    .resize({
      width: 2560,
      height: 2560,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 82,
      mozjpeg: true,
    })
    .toFile(output);

  const stat = await fs.stat(output);
  // eslint-disable-next-line no-console
  console.log(`${path.relative(root, output)} ${Math.round(stat.size / 1024)}KB`);
}
