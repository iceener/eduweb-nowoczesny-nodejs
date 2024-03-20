import { readFile } from "node:fs/promises";
import path from "node:path";
import { makeDirname } from "../make-dirname.js";


export async function getVeggies() {
    const veggies = await readFile(path.join(makeDirname(import.meta.url), 'vegetables.txt'), {encoding: 'utf-8'});

    return veggies.split(',');
}

