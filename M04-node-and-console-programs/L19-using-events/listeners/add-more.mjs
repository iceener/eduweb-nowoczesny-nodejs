import { programEvents, read } from '../program.mjs';

programEvents.on("add-more", () => {
  read.question("Do you want to add more? (y)", (answer) => {

    if(answer.toLowerCase() === 'y') {
      programEvents.emit("add-fruit")
    } else {
      read.close();
    }
  })
})
