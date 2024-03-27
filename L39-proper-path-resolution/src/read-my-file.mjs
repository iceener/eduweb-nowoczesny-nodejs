import fsp from 'node:fs/promises'
import { fileURLToPath } from "node:url"
import path from "node:path";

try {
  const data = await fsp.readFile(path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'vegetables.txt'
  ), 'utf-8')
  console.log(data)
} catch (e) {
  console.error(e);
}
