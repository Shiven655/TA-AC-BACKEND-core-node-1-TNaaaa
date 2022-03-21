
  
var http = require("http");

//server 5566

var server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req, res);
}
server.listen(5566, () => {
  console.log("listning to server at port 5566");
});