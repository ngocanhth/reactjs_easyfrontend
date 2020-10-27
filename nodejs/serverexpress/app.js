var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(3000);


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*Cau hinh EJS*/

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/khoapham', function(req, res){
	res.render('index');
})


app.post("/hello", urlencodedParser, function(req, res){
	var u = req.body.username;
	var p = req.body.password;

	console.log(u);
	console.log(p);

	res.send(`<h1>${u} ${p}</h1>`);
});

app.get('/chitet', function(req, res){
	res.render('chitet', {hoten: "le ngoc anh"});
})

app.get('/namsinh', function(req, res){
	res.render('namsinh', {namsinh: [1988, 1987, 1990, 1993, 1995]});
})