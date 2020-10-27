let express = require ("express");
let fs = require ("fs");

let app = express();

let http = require("http");
let server = http.createServer(app);

server.listen(2882);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/9-promisestatusandvalue.html", "utf-8");

	let data = fs.readFileSync(__dirname +"/9-promisestatusandvalue.html", "utf-8");
	// data = data.replace("{NAME}", "NGOCANH");

		data = data.replace("{NAME}", "ngoc anh");
		res.end(data);

});



