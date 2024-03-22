import { Hono } from 'hono';
import { validator } from 'hono/validator'

export const newsletterRoutes = new Hono();

const emailAddresses = [];

newsletterRoutes.post('/sing-up', validator('json', (value, c) => {
  const email = value['email']
  if (!email) {
    return c.json({ message: 'You need to provide email!'}, 400)
  }
  if(!email.includes('@')) {
    return c.json({ message: 'This email is not valid!'}, 400)
  }
  return {
    email,
  }
}), (c) => {
  const { email } = c.req.valid('json')
  emailAddresses.push(email);
  return c.json({ email, message: "signed up" })
})
