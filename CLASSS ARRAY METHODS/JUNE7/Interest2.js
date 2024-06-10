// here we are calculating the interest for p=50000, r=2.5% per annum, for time period T=4years
function cal_interest(P,R,T){
    let Amount=( (P/100*R)*T);
    return Amount;
}
let Interest=cal_interest(50000,2.5,4);
let Siva=cal_interest(60000,10,5);
let Ramesh=cal_interest(157860,15,3);
console.log(Ramesh);
console.log(Siva);
console.log(Interest);