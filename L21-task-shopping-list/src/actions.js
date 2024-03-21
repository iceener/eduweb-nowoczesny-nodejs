import { EventEmitter } from 'node:events';
import { handleQuit, handleStart } from './program.handler.js';
import { handleInputProduct, handleShowList } from './shopping-list.handler.js';

export const programActions = new EventEmitter();

export const PROGRAM_EVENTS = {
  start: 'start',
  quit: 'Quit the program',
};

export const SHOPPING_EVENTS = {
  seeList: 'See shopping list',
  inputProduct: 'Input new product',
};

programActions.on(PROGRAM_EVENTS.quit, handleQuit);
programActions.on(PROGRAM_EVENTS.start, handleStart);
programActions.on(SHOPPING_EVENTS.seeList, handleShowList);
programActions.on(SHOPPING_EVENTS.inputProduct, handleInputProduct);
