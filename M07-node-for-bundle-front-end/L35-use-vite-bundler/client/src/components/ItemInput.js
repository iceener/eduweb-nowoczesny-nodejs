import { div, input, p } from "../render/create-element.js";

export function ItemInput(onItemAdd = (val = '') => {
}) {
  const $input = input("input is-primary");

  $input.setAttribute("placeholder", "Add new item (hit Enter when done)");

  $input.addEventListener("keydown", ev => {
    if (ev.key === "Enter" && ev.target.value) {
      onItemAdd(ev.target.value);
      ev.target.value = "";
    }
  });

  return div("panel-block", [
    p("control", [
      $input
    ])
  ]);
}
