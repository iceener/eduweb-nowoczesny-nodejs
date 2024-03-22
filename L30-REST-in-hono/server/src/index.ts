import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { usersController } from './users.controller.js';
import process from 'node:process'

const app = new Hono()

app.route('/api/users', usersController)

const port = Number(process.env.PORT) || 3000;
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
