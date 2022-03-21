let http = require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('content type', 'text/html');
  res.end('welcome');
}
server.listen(4444, () => {
  console.log('server is on port 4444');
});
