// here we are printing the odd numbers
let num=[1,2,3,4,5,6,7]
function Siva(num){
    if(num%2!==0){
        return true;
    }
    else{
        return false;
    }

}
let Odd=num.filter(Siva);
console.log(Odd);