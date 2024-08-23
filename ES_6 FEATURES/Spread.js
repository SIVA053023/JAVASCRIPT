// Arrays

let users=[1,2,3,4,5,6]
let Employees=["Siva","Krishna","Sonia"]

let merging=[...users,Employees]          // MERGING
console.log(merging)

let extractAndCopy=[...users]             // CReating a new array from the existing Array
console.log(extractAndCopy)
 
let Extend=[...users,7,8,9,10]            // Extending the users Arrray
console.log(Extend)


// Object

let emp={id:101,name:"rahul",email:"rahul@gmail.com"}
let one={email:"rahulGandhi@gamil.com",sal:45000,loc:"Banglore"}

let merge={...emp,...one}                              // Merging  but here the email OverRides because the Object doesn't allow the Duplicate Keys
console.log(merge)

let two={...emp}                                   // Extract and Copy into the new Object
console.log(two)

let Extending={...emp,Company:"TCS",Country:"INDIA"}           // extending the emp Object
console.log(Extending)





