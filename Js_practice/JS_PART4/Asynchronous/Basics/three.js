let calc=(a,b,op)=>{
   if(op==="sum"){
    return a+b
   }
 else if(op==="multi"){
    return a*b
 }
 else{
    console.log("error")
 }
}
let r1=calc(20,30,"sum")
console.log(r1)
let w3=calc(15,22,"multi")
console.log(w3)