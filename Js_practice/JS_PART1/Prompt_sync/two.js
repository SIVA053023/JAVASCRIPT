
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Use the prompt function to read user input
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

const age = prompt('How old are you? ');
console.log(`You are ${age} years old.`)