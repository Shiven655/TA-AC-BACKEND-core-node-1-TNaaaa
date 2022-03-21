let http = require('http');
let fs = require('fs');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to server');
    res.end();
  }
  if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('content-type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      } else {
        res.end(content);
      }
    });
  }
}
server.listen(5555, () => {
  console.log('Server on port 4000');
});
