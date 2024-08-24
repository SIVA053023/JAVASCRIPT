let calc=(a,b,operation)=>{
       if(operation==="sum"){
        return a+b
       }
       if(operation==="multiply"){
        return a*b
       }
}

//       passing String as a argument

let op1=calc(10,20,"sum")
console.log(op1)                         // output= 30

let op2=calc(20,30,"multiply")
console.log(op2)                        // output= 600



//      passing function as a Argument



let sum=(a,b)=>{
            return a+b
}
let multi=(a,b)=>{
    return a*b
}

let One=(a,b,Callback)=>{
        return Callback(a,b)
}


let s1=One(20,30,sum)
console.log(s1)                    // output=50

let m1=One(10,15,multi)
console.log(m1)                    // output=  150

