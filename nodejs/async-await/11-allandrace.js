let express = require ("express");
let fs = require ("fs");

let app = express();

let http = require("http");
let server = http.createServer(app);

server.listen(4000);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/11-all_and_race.html", "utf-8");

	let data = fs.readFileSync(__dirname +"/11-all_and_race.html", "utf-8");
	// data = data.replace("{NAME}", "NGOCANH");

		data = data.replace("{NAME}", "promise bai 11");
		res.end(data);

});



