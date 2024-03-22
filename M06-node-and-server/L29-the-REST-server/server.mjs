import { createServer } from 'node:http';
import { URL } from 'node:url';

const users = [
  {uuid: 'QC6_A3m8RT', name: 'Michal'}
]

const PORT = 3000;
const server = createServer((req, res) => {

  const reqUrl = new URL(req.url, 'http://localhost');
  const [,entry, resource, uuid] = reqUrl.pathname.split('/')
  if(entry === 'api') {
    let response;

    if(resource === 'users') {
      response = users;
      if(uuid) {
        response = users.find(u => u.uuid === uuid);
      }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      hello: 'You requested',
      method: req.method,
      url: reqUrl.pathname,
      query: Object.fromEntries(reqUrl.searchParams.entries()),
      response: response
    }))
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      hello: 'You requested',
      method: req.method,
      url: reqUrl.pathname,
      query: Object.fromEntries(reqUrl.searchParams.entries())
    }))
  }
})


server.listen(PORT, 'localhost', () => {
  console.log(`Hello I'm listening on port ${PORT}`)
})
