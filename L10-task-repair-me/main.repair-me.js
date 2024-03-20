import { getVeggies } from "./level-deep/read-veggies";


const newUser = await import("./level-deep/make-user").default("Michał", "Kowalski")

console.log("New user added to DB...")

console.log(newUser);

console.log("You can buy me these:", await getVeggies())
