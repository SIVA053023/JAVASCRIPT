// calculating the total amount after the interest added to principle

function cal_interest(principle, rate){        
    let t_amount=principle+principle/100*rate;
    return t_amount;
}
let amount=cal_interest(25648,17);    // here we are invoking  the data principle=25648 and rate=17
console.log(amount);