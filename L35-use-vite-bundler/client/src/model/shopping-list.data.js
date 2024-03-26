import _ from 'lodash'

const list = [];
let onItemAdd = (value) => {};

export function addToList(item) {
  list.push(item);
  onItemAdd(item);
  console.log('last item entered:', _.last(list))
}

export function registerHandler(callback) {
  onItemAdd = callback;
}
