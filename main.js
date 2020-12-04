var http = require("http");

var port = 8081;

function doGet(req, rsp) {

    rsp.writeHead(200, {'Content-Type': 'text/plain'});
    rsp.end('Hello world.\n');
    console.log("Respond to: " + req.headers.host);
}

http.createServer(doGet).listen(port);

console.log("HTTP server is listening on port " + port);
