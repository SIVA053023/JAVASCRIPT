class Account{
    min_bal=500;
    deposite_amount(amount){
        console.log(`${amount}-Deposited successfully`)
    }
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
console.log(a1.min_bal)
console.log(a2.min_bal)
a1.deposite_amount(5000)
a1.deposite_amount(15000)