// write a program to print even  or odd for a given number?
function evenOrOdd(number){
    if(number%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(evenOrOdd(456));     // output Even
console.log(evenOrOdd(457));    //  output Odd

  // case 2
  let num=[1,2,3,4,5,6,7,8,9,10];
  function evenOrOdd(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
  }
  let evennumbers =num.filter(evenOrOdd);
  console.log(evennumbers);