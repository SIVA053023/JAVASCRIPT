// here we are printing the primenumbers from1 to 100;
/*let num=1;
while(num<=100){
    if(num%1===0  && num%num===0){
        console.log(num);
    }
    num++;
}*/
let num = 2;
while (num <= 100) {
    if (num % 1 === 0 && num % num === 0) {
        return num;
    }
    num++;
}

