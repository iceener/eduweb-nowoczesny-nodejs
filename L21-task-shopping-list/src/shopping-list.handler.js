import inquirer from 'inquirer';
import { PROGRAM_EVENTS, programActions } from './actions.js';
import { nanoid } from 'nanoid';

const shoppingList = [];

export function handleShowList() {
  console.log('Shopping list:');
  console.log(shoppingList);
  programActions.emit(PROGRAM_EVENTS.start);
}

export async function handleInputProduct() {
  const { name, quantity } = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Product name:',
    },
    {
      name: 'quantity',
      type: 'input',
      message: 'Product quantity:',
    },
  ]);
  shoppingList.push({ name, quantity, uuid: nanoid() });
  programActions.emit(PROGRAM_EVENTS.start);
}
