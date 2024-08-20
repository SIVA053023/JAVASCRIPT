let enames=["rahul","sonia","gandhi"]           // printing the whole Array by different methods

// for Loop
for(let i=0;i<=enames.length-1;i++){
    console.log(enames[i])
}
// While loop
let i=0
while(i<=enames.length-1){
    console.log(enames[i]);
    i++;
}
 //DO While Loop
do{
    console.log(enames[i]);
    i++;
}while(i<=enames.length-1)

    // For of

for(ename of enames){
    console.log([ename])
}

/// by using thePUSH method
let employees=["rahul gandhi","Sonia Gandhi","Priyanka Gandhi"]
let Employee=[]
for(employee of employees){
    Employee.push(employee)
    console.log(Employee)
}

// Array.from
let replicate_Array=Array.from(enames)
console.log(replicate_Array)

// Spread Operator
let Onemore=[...enames]
console.log(Onemore)

// MAP method
let new_array=enames.map((ename)=>{
         return ename
})
console.log(new_array)

//FOR EACH
enames.forEach((ename)=>{
           console.log(ename)
})



// Below all the methods are expects the function as an argument
/*
[].forEach((argument)=>{console.log(argument)})
[].map((argument)=>{console.log(argument)})
[].reduce((argument)=>{console.log(argument)})
[].filter((argument)=>{console.log(argument)})
[].find((argument)=>{console.log(argument)})     */



