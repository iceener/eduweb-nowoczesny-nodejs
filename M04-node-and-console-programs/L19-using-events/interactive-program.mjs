import { programEvents } from './program.mjs'
import './listeners/add-fruit.mjs'
import './listeners/add-more.mjs'

programEvents.emit("add-fruit")





