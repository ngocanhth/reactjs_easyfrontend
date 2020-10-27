// JSON Object
/*
stringify - Convert an object to a JSON string
parse - Convert a JSON string to an object
*/

let mydog = {name: 'milu', age: 1, dead: false}

let mydogString = JSON.stringify(mydog);

console.log(typeof mydog);
console.log(typeof mydogString);

let mycatString =  '{"name": "tom", "age": 1, "dead": true}';
let mycat = JSON.parse(mycatString);
console.log(mycatString);
console.log(mycat.name);