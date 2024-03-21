import { luckyNumber, makeRandomId } from "./string.utils.js";


export default function makeUser(name = '', lastName = '') {

  return {
    id: makeRandomId(),
    name,
    lastName,
    things: { luckyNumber }
  }
}
