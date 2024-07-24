// print the Array by adding 1 to every element in Array

// REDUCE
let numbers=[1,2,3,4,5,6,7,8,9]
let newone=numbers.reduce((acc,num)=>{
      acc.push(num+1)
      return acc;
},[])
console.log(newone)

// MAP
let map=numbers.map(num=>num+1)
console.log(map)
