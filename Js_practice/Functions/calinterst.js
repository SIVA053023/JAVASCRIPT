function cal_interest(p,r,t){
  let total_amount=p+((p/100)*r*t)
  return total_amount;
}
let amount=cal_interest(5000,10,2)
console.log(amount)                // output=6000

