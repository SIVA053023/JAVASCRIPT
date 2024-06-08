// Write a program to print the given 3 numbers in descending orders?
let a=45;
let b=89;
let c=65;
let d=90;
let num=[89,45,65,90];

num.sort(function(a,b){
    return b - a ;            // descending order
});
console.log(num);