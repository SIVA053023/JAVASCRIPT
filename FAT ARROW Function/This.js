// here we use the noraml and the Fat arrow 
// NORMAL Function
function A(){
    console.log(this);
}
A()                      // her ethe output= object conetest is bigger

// FAT Arrow Function
let B=()=>{
    console.log(this)
}
B();                        // Here the output is empty object {}