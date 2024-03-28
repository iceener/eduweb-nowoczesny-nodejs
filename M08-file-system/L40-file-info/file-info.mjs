import fs from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(dir, 'vegetables.txt')

try {
  const info = await fs.stat(filePath);
  console.log(info.size, 'Bytes');
  console.log(info.mtime);
  console.log(info.birthtime);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (err) {
  console.error(err)
}
