import fs from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(dir, 'log.jsonl')

export async function saveEventLog(eventName) {

  const logObject = {
    id: (Math.random() * 800).toString(30),
    date: new Date(),
    eventName
  }

  try {
    await fs.writeFile(filePath, JSON.stringify(logObject) + '\n', { flag: 'a', encoding: 'utf-8' });
  } catch (e) {
    console.error(e);
  }
}

