import last from 'lodash/last'

const list: string[] = [];
//@ts-ignore
let onItemAdd = (value: string): void => {};

export function addToList(item: string) {
  list.push(item);
  onItemAdd(item);
  console.log('last item entered:', last(list))
}

export function registerHandler(callback: typeof onItemAdd) {
  onItemAdd = callback;
}
