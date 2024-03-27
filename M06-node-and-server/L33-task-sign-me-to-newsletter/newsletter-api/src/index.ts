import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { newsletterRoutes } from './newsletter.routes.js';

const app = new Hono()

app.use(cors({ origin: 'http://localhost:5173' }))

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
