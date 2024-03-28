import ejs from 'ejs'
import fsp from 'node:fs/promises'
import { fileURLToPath } from "node:url"
import path from "node:path";

const users = [
  {name: 'Jan'},
  {name: 'Janina', selected: true},
]

const template = await getTemplateFile('user-list');
console.log(ejs.render(template, { users }))


async function getTemplateFile(fileName: string) {
  try {
    const dir = path.join(path.dirname(fileURLToPath(import.meta.url)));
    return fsp.readFile(path.join(dir, 'templates', `${fileName}.ejs`), 'utf-8')
  } catch (e) {
    console.error(e);
    return `<h2> Error: cannot load file: ${fileName} </h2>`
  }
}
