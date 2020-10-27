var http = require ("http");
var fs = require ("fs");

http.createServer(function (req, res) {
//	res.writeHead(200, {"Content-Type":"text/html"});

	res.writeHead(200, {"Content-Type":"application/json"});


	// var data = fs.readFileSync(__dirname +"/index.html", "utf-8");
	// data = data.replace("{NAME}", "NGOCANH");
	// res.end(data);

	// cach2

	//fs.createReadStream(__dirname + "/index.html").pipe(res);

	var obj = {
		ho : "Le",
		ten : "Ngoc Anh",
		namwsinh : 1988,
	}

	res.end(JSON.stringify(obj));

}).listen(7777);