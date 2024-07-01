// create new array by using the spread opertaor, Spread operator is appilicable for array and objects also;
// to extract array elemnts and copyinto new array
let eids=[101,102,103,104]  
let new_eids=[...eids]         // here creating the new array by Spread operator
console.log(new_eids)          // output= [101,102,103,104]  here we are creating new array

let a=[10,20,30,40]
let b=[30,40,50,60,70]    // here we are merging the both a and b arrays
let c=[...a,...b]
console.log(c);           //  output=[10,20,30,40,30,40,50,60,70]  array allows duplicate values

// for Extending
let d=[10,20]
let e=[...d,30,40,50]
console.log(e);          //output=[10,20,30,40,50]

// object point of view  and the object doesn't allows the duplicates

// extract and create new array

let user={ename:"Shiva",eid:101,email:"sivakrishna053@gmail.com"}
let emp={};
// normal way
emp.id=user.id;
emp.eid=user.eid;
emp.email=user.email; // but its a very lengthy process when we have a lot  keywords and properties
// by using the Spread operator 
let employee={...user}
console.log(employee);   // output={ename:"Shiva",eid:101,email:"sivakrishna053@gmail.com"}

// Extending
let user1={id:102,
    ename:"rahul",
}
let emp2={...user1,email:"sivakrishna053@gmail.com"}
console.log(emp2);     // output={id:102,ename:"rahul",email:"sivakrishna053@gmail.com"}

// merging
let emp1={id:101,
    ename:"Siva",
    sal:45000
}
let siva={id:102,
    ename:"Siva",
    sal:45000
}
let krishna={...emp1,...siva}
console.log(krishna)              // output={ id: 102, ename: 'Siva', sal: 45000 } 
