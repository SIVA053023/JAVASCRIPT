class Account{
    min_bal=500;
    deposite(amount){
        console.log(`${amount}- deposited amount successfully`)
    }
}
let a1=new Account(5000)
a1.deposite(50000)
console.log(a1)