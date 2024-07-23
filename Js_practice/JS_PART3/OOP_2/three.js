class Account{
    acc_bal=0
    min_bal=500

    deposite_amount(amount){
        this.acc_bal=this.acc_bal+amount+  "amount deposited successfully"
    }
    get_bal(){
         return this.acc_bal-this.min_bal
    }
    with_drawl(mount){
        this.acc_bal=this.acc_bal-mount
    }

}
let a1=new Account();
a1.deposite_amount(3500)
console.log(a1)
a1.get_bal()
console.log(a1)
a1.with_drawl(1600)
console.log(a1)