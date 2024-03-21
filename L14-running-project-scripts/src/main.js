import { nanoid } from "nanoid";
import _ from "lodash";

console.log("Find last element program?")

const fruits = [
    { uuid: nanoid(),name: "apples"},
    { uuid: nanoid(),name: "mangoes"},
    { uuid: nanoid(),name: "cherries"},
    { uuid: nanoid(),name: "cherries"},
];

console.log("My array is", fruits);

console.log("Last element:", _.last(fruits))
