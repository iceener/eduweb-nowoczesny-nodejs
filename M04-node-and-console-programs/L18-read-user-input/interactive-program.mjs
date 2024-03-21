import readline from "node:readline"
import { stdin, stdout } from 'node:process';

const read = readline.createInterface({
  input: stdin,
  output: stdout
})

const fruits = [];
program();

function program() {
  read.question("Add new fruit: ", (fruit) => {

    fruits.push(fruit)
    console.log("Your collection is", fruits.join(","))

    read.question("Do you want to add more? (y)", (answer) => {

      if(answer.toLowerCase() === 'y') {
        program();
      } else {
        read.close();
      }
    })
  })
}

