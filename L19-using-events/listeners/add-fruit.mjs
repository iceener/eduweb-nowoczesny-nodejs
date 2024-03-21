import { fruits, programEvents, read } from '../program.mjs';

programEvents.on("add-fruit", () => {
  read.question("Add new fruit: ", (fruit) => {

    fruits.push(fruit)
    console.log("Your collection is", fruits.join(","))
    programEvents.emit("add-more")
  })
})
