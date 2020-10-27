var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type":"text/html"});
	res.end("<a>Khoapham nodejs</a>")
}).listen(8888);