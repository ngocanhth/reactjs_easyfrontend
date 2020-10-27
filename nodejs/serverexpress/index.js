var express = require("express");
var app = express();

var multer  = require('multer')


var server = require("http").createServer(app);

server.listen(3000, function(){
	console.log('ket noi thanh cong');
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

var upload = multer({storege: storage})

app.post('/upload', upload.single("file"), function(req, res){
	console.log(req.file);
	res.send('Upload thanh cong');
})


/*Cau hinh EJS*/

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', function(req, res){
	res.render('form');
})


// app.post("/hello", urlencodedParser, function(req, res){
// 	var u = req.body.username;
// 	var p = req.body.password;

// 	console.log(u);
// 	console.log(p);

// 	res.send(`<h1>${u} ${p}</h1>`);
// });
