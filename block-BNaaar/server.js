
  
let http = require("http");
var url = require("url");
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  console.log(req.method, req.url, parsedUrl);
  if (req.method === "GET" && req.url === "/") {
    res.write("welcome to index page");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h2>Page Not Found !</h2>");
  }
}
server.listen(5000, () => {
  console.log("listning server at port 5000");
});