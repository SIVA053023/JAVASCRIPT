let emp={
    eid:101,
    ename:"Shiva",
    email:"siva@gmail.com"
}

let details={
    email:"sivakrishna053@gmail.com",
    esal:789798
}

let emp_details={...emp,...details}   // this is a spread operator
console.log(emp_details)
let one=[{...emp,...details,eloc:"banglore"}]
console.log(one)
