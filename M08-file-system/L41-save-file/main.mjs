import { saveEventLog } from './save-events.mjs';
import process from 'node:process'

await saveEventLog('Program started')


await saveEventLog('Sth happened')


setTimeout(async () => {
  await saveEventLog('Program closed')
  process.exit()
}, 2000)
