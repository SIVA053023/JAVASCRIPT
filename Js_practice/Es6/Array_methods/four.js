 let numbers=[45,88,23,44,79,64,82]
// let even=Array.from(numbers)     // for to create the new from the existing array
// console.log(even)   
let even=[]
for(num of numbers){
    if(num%2===0){
         even.push(num)
    }
}
console.log(even)