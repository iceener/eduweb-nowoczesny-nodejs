

const list = [];
let onItemAdd = (value) => {};

export function addToList(item) {
  list.push(item);
  onItemAdd(item);
  console.log('last item entered:', last(list))
}

export function registerHandler(callback) {
  onItemAdd = callback;
}

function last(arr = []) {
  return arr[arr.length - 1];
}
