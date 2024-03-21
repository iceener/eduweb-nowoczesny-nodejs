import { EventEmitter } from 'node:events';
import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

export const programEvents = new EventEmitter();
export const read = readline.createInterface({
  input: stdin,
  output: stdout
})

export const fruits = [];
