let emp={
    id:102,
    name:"krishna",
    esal:78222
}
let user={
    id:103,
    name:"Siva",
    esal:95623
}
let one={...emp,...user}   // here user overrides the emp and user object printed
console.log(one)