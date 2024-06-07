// Write a program to print the given 3 numbers in descending orders?
let a=89;
let b=45;
let c=65;
let d=90;
let num=[89,45,65,90];
num.sort(function(a,b){
    return(a - b);
}
)
console.log(num);