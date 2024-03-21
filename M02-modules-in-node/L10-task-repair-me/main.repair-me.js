import { getVeggies } from "./level-deep/read-veggies.js";
import makeUser from "./level-deep/make-user.js";

const newUser = makeUser("Michał", "Kowalski")

console.log("New user added to DB...")

console.log(newUser);

console.log("You can buy me these:", await getVeggies())
