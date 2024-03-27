# `L37` task - TODO list

---

## Sing me up to newsletter `client`

- [ ] generate new `vite` app with `typescript` as an `client`
- [ ] run lesson `L33` as `server` side
- [ ] choose your favourite framework 
  - or Vanilla with our code from previous lessons
  - if you choose code from `render/create-element`, make sure to use kind of _EventEmitter_ to simplify the flow
  - good choice is: https://www.npmjs.com/package/mitt
- [ ] install `bulma` and add to app
  - https://bulma.io
  - https://www.npmjs.com/package/bulma
- [ ] install `axios` to communicate with  
  - https://axios-http.com/docs/intro
  - https://www.npmjs.com/package/axios
- [ ] apply this template for website:
```html
  <div class="is-flex is-justify-content-center mt-6">
  <div class="column is-two-fifths">
    <h1 class="title is-1">Newsletter</h1>
    <div class="field">
      <label class="label">Your Email:</label>
      <div class="control">
        <input class="input" type="email" placeholder="enter e-mail address to sign up for newsletter" value="">
      </div>
      <!-- apply "help" paragraph below, only when back-end error! -->
      <p class="help is-danger">This email is invalid</p>
    </div>
    <div class="field">
      <div class="control is-flex is-justify-content-right">
        <button class="button is-link">Sign up</button>
      </div>
    </div>
    <!-- apply below only when back-end success! -->
    <div class="notification is-success">
      Thank you for sign up to our newsletter.
    </div>
  </div>
</div>
  ```
- [ ] if you use "our" `render/create-element` this will help you out:
```javascript
const notify = div('notification is-success', ['Thank you for sign up to our newsletter.'])
notify.style.visibility = 'hidden';

const template = div('is-flex is-justify-content-center mt-6', [
  div('column is-two-fifths', [
    p('title is-1', ['Newsletter']),
    div('field', [
      label('label', ['Your email:']),
      input('input'),
      p('help is-danger', ['This email is invalid'])
    ]),
    div('field', [
      div('control is-flex is-justify-content-right', [
        button('button is-link', ['Sign up'])
      ])
    ]),
    notify,
  ])
])
```
- [ ] remember to add proper `label` and `button` factory function elements.
- [ ] split code to separate `components`
- [ ] (if you are not using frameworks) use `mitt` to exchange data between `components`
- [ ] add [cors](https://hono.dev/middleware/builtin/cors) to `L33` server in order to register this front-end (needed for Ajax requests):
```javascript
import { cors } from 'hono/cors'
// ...
const app = new Hono()

app.use(cors())
// ...
```
- [ ] run server from `L33`
- [ ] when user press `Sign up` - send `axios` `POST` message to http://localhost:3000/newsletter/sing-up
  - [ ] with proper value from `input`
  - [ ] if server responds with `200` - show `.notification.is-success` 
  - [ ] if server responds with `400` - show `.help.is-danger` with error `message` from server 

