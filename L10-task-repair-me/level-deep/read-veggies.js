const { readFile } = require('node:fs/promises');
const path = require('node:path');

module.exports = {
    async getVeggies() {
        const veggies = await readFile(path.join(__dirname, 'vegetables.txt'), {encoding: 'utf-8'});

        return veggies.split(',');
    }
}
