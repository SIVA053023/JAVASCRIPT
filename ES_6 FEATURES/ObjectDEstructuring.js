let State={
    p_name:'marker pen',
    price:10,
    brand:"Natraj",
    users:{name:"Siva",id:101}
}
// console.log(State.p_name)      // by usin gwe can print the p_name only
// console.log(p_name)            // name not defined error

// Object Destructuring

let {p_name,price,users}=State         // here enabling the object values with the variable
console.log(p_name)
console.log(price)
console.log(users.id)

//Example 2

let One={
    emp:{
        id:101,name:"Priyanka",sal:45000

    },
    product:{
        p_name:"Samsung",priceone:78500
    }
}
// here i want to read a emp name
// console.log(one.emp.name)                 // normal expression but is difficult when we have lakh of object
let {emp}=One
let {name}=emp
console.log(name)

// if if i want to print the priceone of product
// console.log(One.product.pricreone)              // normal expression but is difficult when we have lakh of object
let{product}=One
let {priceone}=product
console.log(priceone)



//SWAPPING   without using the third variable

let a=10
let b=20
 [a,b]=[b,a]

console.log(a)  // output=20
console.log(b)  /// output=10

