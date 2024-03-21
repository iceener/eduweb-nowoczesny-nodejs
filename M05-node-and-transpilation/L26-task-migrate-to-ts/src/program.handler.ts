import inquirer from 'inquirer';
import process from 'node:process';
import { PROGRAM_EVENTS, programActions, SHOPPING_EVENTS } from './actions.js';

export async function handleStart() {
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'Chose what to do:',
      choices: [
        SHOPPING_EVENTS.seeList,
        SHOPPING_EVENTS.inputProduct,
        PROGRAM_EVENTS.quit,
      ],
    },
  ]);
  programActions.emit(action);
}

export function handleQuit() {
  process.exit();
}
