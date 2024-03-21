
console.log('Endless program! - well... kind of')

let step = 1;

setInterval(() => {

    console.log("Making step", step);

    step++;
    throw new Error('Oh no!')

}, 1000)

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err.message);
})

// console.log('HOMEDRIVE', process.env.HOMEDRIVE)
