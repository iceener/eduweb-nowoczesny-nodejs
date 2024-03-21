import { readFile } from "node:fs/promises";
import path from "node:path";
import { makeDirname } from "../my-dirname.mjs";

const { __dirname } = makeDirname(import.meta.url);

// const veggies = await readFile(`${__dirname}/vegetables.txt`, 'utf-8');
const veggies = await readFile(path.join(__dirname, 'vegetables.txt'), 'utf-8');

console.log(veggies);
// console.log(__dirname);
console.log(path.join(__dirname, 'vegetables.txt'));

