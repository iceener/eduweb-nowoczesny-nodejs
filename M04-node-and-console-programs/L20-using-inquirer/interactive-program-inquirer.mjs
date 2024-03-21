import inquirer from 'inquirer';

const fruits = [];
const questions = [
  {
    type: 'input',
    name: 'fruit',
    message: 'Add new fruit: '
  },
  {
    type: 'confirm',
    name: 'answer',
    message: 'Do you want to add more?'
  }
]

await program();

async function program() {

  const {fruit, answer} = await inquirer.prompt(questions)

  fruits.push(fruit)
  console.log("Your collection is", fruits.join(","))
  if(answer) {
    await program();
  }
}

