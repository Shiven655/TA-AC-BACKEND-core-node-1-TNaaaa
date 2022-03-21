let http = require('http');
let server = http.createServer(handleserver);
function handleserver(req, res) {
  res.end('welcome');
}
server.listen(4000, () => {
  console.log('server is listning on port 4000');
});
