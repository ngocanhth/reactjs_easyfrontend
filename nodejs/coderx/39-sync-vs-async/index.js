let fs = require("fs");

//sync

// let text1 = fs.readFileSync('./song1.txt', {encoding: 'utf-8'});
// let text2 = fs.readFileSync('./song2.txt', {encoding: 'utf-8'});
// console.log("start");
// console.log(text1);
// console.log(text2);
// console.log('end');

// async

console.log("start");
let text = fs.readFile('./song1.txt', {encoding: 'utf-8'}, function (er, data){
	console.log(data);
});

console.log('end');