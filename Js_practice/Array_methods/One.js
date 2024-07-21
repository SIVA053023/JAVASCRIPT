let eids=[101,102,102,102,103,104,105]

// PUSH is for to add the element at the END  of an array
let new_len=eids.push(106)  
console.log(eids);
console.log(new_len)


// UNSHIFT is for to add the element at starting of an array
eids.unshift(100)       
console.log(eids)

//SHIFT is for to delete the fisrt element of an array
eids.shift()           
console.log(eids)

// POP is for to delete the last element of an array
eids.pop()           
console.log(eids)

// SPLICE
let arr=[1,2,3,4]
arr.splice(    1,           2,                          5,6       )   // here we are removing 2 values from index 1 and adding 5,6 ouput=[1,5,6,4]
//         from  index  ,  no of values to remove,     adding  elemtes
console.log(arr)


//JOIN   to join something in between the elements here i join the -
let hm=arr.join('-') // join method output= 1-5-6-4
console.log(hm)



// toString         to convert the array into String
let gm=arr.toString(hm)   // toString method ouput=1,5,6,4
console.log(gm)

//ARRAY.FROM  is used to create a new array
let ar="hellow"
let df=Array.from(ar)     // output=[ 'h', 'e', 'l', 'l', 'o', 'w' ]
console.log(df)

// Array.of Creates a new array instance with a variable number of arguments

let we=Array.of(1,2,3,4) // output=[ 1, 2, 3, 4 ]
 console.log(we)
let se=Array.from(we)    // output=[ 1, 2, 3, 4 ]
console.log(we)

//concat is for to combine the arrays

let ename=["Siva","krishna"]
let rr=[...ename,"456165"]  // here we are using the Spread operator , output=[ 'Siva', 'krishna', '456165' ]
console.log(rr)
let names=["vamsi","pavan"]
let cc=ename.concat(names)
console.log(cc)              // output=[ 'Siva', 'krishna', 'vamsi', 'pavan' ]


// INCLUDES  it verifies the element is there or not
let ids=[1,2,3,4,5]
console.log(ids.includes(5))  // output=true because 5 is there
console.log(ids.includes(9))   // output=false

//INDEXOF  it is for to get the index of an element
console.log(ids.indexOf(3))  // output=2
console.log(ids.indexOf(5))   // output=4

//REVERSE    it is for to reverse the order of an array

console.log(ids.reverse())  // output=[ 5, 4, 3, 2, 1 ]

//SORT is for to set the ascending and decending order of an array but by Default it is ascending

let roll_no=[101,103,108,105,104,102,107,106]
//ascending order
console.log(roll_no.sort())  //output=[101, 102, 103, 104, 105, 106,107, 108]

// descending order
console.log(roll_no.sort((a,b)=>b-a))  // output=[108, 107, 106,105, 104, 103,102, 101]

//FIND returns the first element that passes the test.
let ro=[1,2,3,4,5]
console.log(ro.find(a=>a>2))  //output=3 cause 3 is the first number which is greater than 2

//FINDINDEX    returns the index of the first element that passes the test.

console.log(ro.findIndex(a=>a>3))  // output=3 cause index of element 4 is 3 

// REDUCE  Executes a reducer function on each element of the array, resulting in a single output value.
let nos=[1,2,3,4]
let gh=nos.reduce((a,b)=>a+b,0)
console.log(gh)   // output=10   (1+2+3+4)



