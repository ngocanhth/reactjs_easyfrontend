let fs = require("fs");

let text = fs.readFileSync('./song.txt', {encoding: 'utf-8'});
console.log(text);

fs.writeFileSync('./song2.txt', text);