var Mouse = require('./mouse');
var Cat = require('./cat');

let mickey = new Mouse('black');
let jerry = new Mouse('orange');

let tom = new Cat();

console.log(tom);

console.log(mickey);

tom.eat(mickey);

console.log(tom);

console.log(mickey);







