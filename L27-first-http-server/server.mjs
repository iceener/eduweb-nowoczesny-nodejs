import { createServer } from 'node:http';

const PORT = 3000;
const server = createServer((req, res) => {

  console.log(req.headers['x-test'])
  res.end(`Hello! you requested ${req.url}`)
})


server.listen(PORT, 'localhost', () => {
  console.log(`Hello I'm listening on port ${PORT}`)
})
