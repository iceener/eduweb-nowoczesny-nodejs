import { a } from "../render/create-element.js";

export function ShoppingListItem(text) {
  return a("panel-block", [text]);
}
