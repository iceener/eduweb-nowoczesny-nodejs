import 'bulma/css/bulma.css'

// Concept like: ReactDOM (append App to document)
const app = document.querySelector("#app");


import("./components/App.js").then(m => {
  if (app) {
    app.append(m.App());
  }
})

console.log('!')
// This is SPA: Single Page Application
// 1. whole routing (if any) is happening client side
// 2. we drop (preventDefault()) for native links and forms
// 3. all communication to back-end is via Ajax
// 4. we do not want to reload page (this will erase current app state)
