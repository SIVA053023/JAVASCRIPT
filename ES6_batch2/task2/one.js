
// creating the new array from the existed array
let enames=["siva","krishna","sanjay"]

// by loops

let new_emp1=[]
for(ename of enames){       // by using the for of
    new_emp1.push(ename)
}
//console.log(new_emp1)

//for loop
let three=[]
for(let i=0;i<=enames.length-1;i++){
     three.push(enames[i])
}
console.log(three)
//by using the map

let new_emp=enames.map((name)=>{
   return name
})
console.log(new_emp)

// by using the array.from

let one=Array.from(enames)
console.log(one)

// by using the SPREAD
let two=[...enames,"Kumar"]
console.log(two)






