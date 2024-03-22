import { createServer } from 'node:http';
import process from 'node:process';

const { PORT = 3001, NODE_ENV } = process.env;
const server = createServer((req, res) => {
  res.end(`Hello! you requested ${req.url}`)
})


server.listen(PORT, 'localhost', () => {
  console.log(`Hello I'm listening on port ${PORT}, environment: ${NODE_ENV}`)
})
