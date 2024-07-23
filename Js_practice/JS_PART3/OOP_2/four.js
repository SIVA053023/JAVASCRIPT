class Account{
    min_bal=500
    acc_bal=0
    deposite_amount(amount){
           this.acc_bal=this.acc_bal+amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
    with_drawl(amount){
        this.acc_bal=this.acc_bal-amount
    }

}
let a1=new Account()
a1.deposite_amount(50000)
a1.with_drawl(2000)
console.log(a1.get_bal())

let a2=new Account()
a2.deposite_amount(75000)
a1.with_drawl(22000)
console.log(a2.get_bal())
