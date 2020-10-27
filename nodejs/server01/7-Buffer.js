var fs = require("fs");

// var buffer = new Buffer ("Hello", "utf-8");

// //console.log(buffer.toJSON());

var noidung = fs.readFileSync( __dirname + "/danhsach.txt");
console.log(noidung);
console.log(noidung.toString());
console.log(noidung.toJSON());

