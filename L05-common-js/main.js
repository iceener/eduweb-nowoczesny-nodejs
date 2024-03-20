const { last: myLastFunction } = require("./array-helpers") // CommonJS import

console.log("Find last element program")

const fruits = ["apples", "mangoes", "cherries"];

console.log("My array is", fruits);

console.log("Last element:", myLastFunction(fruits))
