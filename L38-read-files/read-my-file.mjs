import fs from 'node:fs'
import fsp from 'node:fs/promises'

// const buffer = fs.readFileSync('./vegetables.txt', 'utf-8')

fs.readFile('./vegetables.txtz', 'utf-8', (err, data) => {
    if(err) {
      console.error(err);
      return //...
    }
  console.log(data)
})

try {
  const data = await fsp.readFile('./vegetables.txt', 'utf-8')
  console.log(data)
} catch (e) {
  console.error(e);
}

// fs.createReadStream('')

//console.log(buffer.toString('utf-8'));
