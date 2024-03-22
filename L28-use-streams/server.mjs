import { createServer } from 'node:http';

const PORT = 3000;
const server = createServer((req, res) => {

  // res.write('hello\n')
  // res.write('from\n')
  // res.write('server\n')
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(req.headers['content-type'] === 'application/json') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      console.log('The body send is:', body)

      res.end(JSON.stringify({
        hello: 'You send me',
        body: JSON.parse(body)
      }))
    })
  } else {
    res.end(JSON.stringify({
      hello: 'Greetings! from sever',
      method: req.method,
      url: req.url
    }))
  }

})


server.listen(PORT, 'localhost', () => {
  console.log(`Hello I'm listening on port ${PORT}`)
})
