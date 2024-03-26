import { article, div, section } from '../render/create-element.js';
import { Header } from "./Header.js";
import { ItemInput } from "./ItemInput.js";
import { ShoppingList } from "./ShoppingList.js";
import { addToList } from "../model/shopping-list.data.js";

// Concept like: React component + JSX (instead used create-element helpers)
export function App() {

  const onItemAdd = (value) => {
    addToList(value);
  };

  return section("container mt-6", [
    article("panel is-primary", [
      Header(),
      ItemInput(onItemAdd),
      ShoppingList()
    ])
  ]);
}
