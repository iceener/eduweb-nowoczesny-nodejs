import fsp from 'node:fs/promises'

try {
  const data = await fsp.readFile('./vegetables.txt', 'utf-8')
  console.log(data)
} catch (e) {
  console.error(e);
}
