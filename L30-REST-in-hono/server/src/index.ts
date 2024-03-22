import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { usersController } from './users.controller';

const app = new Hono()

app.route('/api/users', usersController)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
