function isprime_num(n){
       if(n===1) return false;
       if(n===2) return false;
       if(n%2===0) return false;

       for(let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i===0) return false
       }
       return true
}

function print_prime(start,end){
    for(let num=start;num<=end;num++){
        if(isprime_num(num)){
          console.log(num)
        }
    }
}

let numbers=print_prime(1,100)
console.log(numbers)