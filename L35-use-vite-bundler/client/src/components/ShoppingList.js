import { div } from "../render/create-element.js";
import { registerHandler } from "../model/shopping-list.data.ts";
import { ShoppingListItem } from "./ShoppingListItem.js";

export function ShoppingList() {
  const $list = div();

  registerHandler((item) => {
    $list.append(ShoppingListItem(item));
  });

  return $list;
}
