import { Hono } from 'hono'

export const usersController = new Hono();

const users = [
  {uuid: 'QC6_A3m8RT', name: 'Michal'}
]

usersController.get('', (c) => {
  const name = c.req.query('name')
  if(name) {
    return c.json(users.filter(u => u.name.toLowerCase() === name.toLowerCase()))
  }
  return c.json(users)
})

usersController.get(':uuid', (c) => {
  const uuid = c.req.param('uuid')
  const user = users.find(u => u.uuid === uuid)

  if(user) {
    return c.json(user)
  }
  return c.json({ message: 'User not found' }, 404)
})

usersController.post('', async (c) => {
  const body = await c.req.json()
  users.push({...body, uuid: '82y1672t752r3'})
  return c.json( { message: 'User created'}, 201)
})
