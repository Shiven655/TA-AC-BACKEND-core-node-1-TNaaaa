let http = require('http');
let server = http.createServer(handleReq);
function handleReq(req, res) {
  console.log(req.method);
  console.log(req.headers);

  res.end('welcome');
}
server.listen(4000, () => {
  console.log('Server on port 4000');
});
