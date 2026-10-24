import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../src/assets/images/favicon-source.png', import.meta.url));
const destination = fileURLToPath(new URL('../public/favicon.png', import.meta.url));

await sharp(source).resize(64, 64, { fit: 'cover' }).png().toFile(destination);
