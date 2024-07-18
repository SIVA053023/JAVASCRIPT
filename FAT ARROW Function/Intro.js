// for the fat arrow there is no function keyward and no function name but here we use variable 
/* ADVANTAGES of Fat arrow
   1. short and concise code
   2.implicit return, means we can avoid {} and return when there is a one statement to print
   3.'this' keyward/pointer pointing to current object (in noramal function object contest is very bigger when we use the 'this' keyward but in case of "FAT ARROW" objrct contest is empty)
   4. Function overriding conficts are resolved */
     let A=()=>{
        console.log("Fat arrow")
     }
     A();       // here we are passing the arguments