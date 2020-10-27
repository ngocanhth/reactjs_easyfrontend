let readlineSync = require('readline-sync');

// Wait for user's response.
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

let pet = {};
let name = readlineSync.question(' your pet \'s name ? ');
let weight = readlineSync.question('what is it weight? ');
let color = readlineSync.question('what is it color? ');

pet.name = name;
pet.weight = parseFloat(weight);
pet.color = color;

console.log(pet);