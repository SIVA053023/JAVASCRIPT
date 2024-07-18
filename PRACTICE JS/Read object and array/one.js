//what is object? group of key:values pairs
//how to create 

// how to reasad an  array
let one=[1,4,4.5,456,"two","three"]
console.log(one[0])
console.log(one)
console.log(one.length)


// how to read an object by using object and the JSON.Stringify()

let emp={
    eid:101,
    ename:"Rahul",
    esal:55000
}
let user={}

console.log(Object.values(emp))
console.log(Object.values(emp).length)
console.log(Object.values(emp).length>0)
console.log(JSON.stringify(emp))


if(Object.keys(user).length >0){
    console.log("Not Empty Object")
}
else{
    console.log("Empty Object")
}