const { readFile } = require('node:fs/promises');
const path = require('node:path');

;(async () => {
        // const veggies = await readFile(`${__dirname}/vegetables.txt`, 'utf-8');
        const veggies = await readFile(path.join(__dirname, 'vegetables.txt'), 'utf-8');

        console.log(veggies);
        // console.log(__dirname);
        console.log(path.join(__dirname, 'vegetables.txt'));
})()
