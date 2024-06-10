const prompt = require("prompt-sync")();

let name = prompt("enter your name:");
let company= prompt("enter your company:");
let salary= prompt("enter your salary:");
console.log(`"hello:"${name}`);           // output= hello:(name what we give)
console.log(`"hello:" ${company}`);       //  output= "hello:"(comapany what we give)
console.log(`hello:${salary}`);          // ouput= hello (salary what we provided)