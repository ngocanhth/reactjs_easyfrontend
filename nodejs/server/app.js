var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(3000);

// app.get("/", function(req, res) {
// 	//res.send("<font color=red>Hello World </font>");
// 	res.sendFile(__dirname + "/index.html", "utf-8");
// });


// app.get("/test.php", function(req, res) {
// 	//res.send("<font color=red>Hello World </font>");
// 	res.sendFile(__dirname + "/index.html", "utf-8");
// });



app.get("/tinhtong.php/:so1/:so2", function(req, res) {
	//res.send("<font color=red>Hello World </font>");
	var n1 = parseInt(req.params.so1);
	var n2 = parseInt(req.params.so2);
	res.send(`<h1>${n1+n2}</h1>`);
});