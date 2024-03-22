import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { newsletterRoutes } from './newsletter.routes.js';

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello !' })
})

app.route('/newsletter', newsletterRoutes)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
