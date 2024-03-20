const { makeRandomId, luckyNumber } = require("L10-task-repair-me/level-deep/string.utils.js");

export default function makeUser(name = '', lastName = '') {

  return {
    id: makeRandomId(),
    name,
    lastName,
    things: { luckyNumber }
  }
}
