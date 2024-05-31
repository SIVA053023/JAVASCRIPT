let a=10;        // number
let b=20.5;     // number
let c="30";    // string
let d="Rahul";// string
let e=true;   //boolean
let f=false;  // boolean
let g;       // undefined
// below are addition operator

console.log(a+b);   //(10+20.5)=30.5
console.log(a+c);   //(10+"30") here number+string so it performs CONCATINATION SO ouput=1030
console.log(a+d);   //(10+"Rahul")= here also concatination performs so output= 10Rahul
console.log(a+e);   //(10+true)=(10+1)=11
console.log(a+f);   //(10+false)=(10+0)=10
console.log(a+g);   //(10+undefined)=NaN (Not a Number)

// below are the multiplication operator

console.log(a*b);   //(10*20.5)=205
console.log(a*c);   //300  in multiplication it only show the content
console.log(a*d);   //(10*"Rahul")= NaN  here we can't multiply the 10 with rahul 
console.log(a*e);   //(10*true)=(10*1)=10
console.log(a*f);   //(10*false)=(10*0)=0
console.log(a*g);   //(10*undefined)=NaN (Not a Number)


/* in case python perspective let take a example
    a=10
    b="hi"
    print (a*b)   //here repetion performs so that the "hi" print 10 times 
                  // out put= hihihihihihihihihihi */




