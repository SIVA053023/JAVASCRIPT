class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    min_Bal=500;
    constructor(Id,Name,Bal){
        this.acc_Id=Id;
        this.acc_Name=Name;
        this.acc_Bal=Bal;
    }
    deposit_amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl_amount(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,"rahul",5000)
let a2=new Account(102,"sonia",5600)
let a3=new Account(103,"priya",5900)
console.log(a1)
a1.deposit_amount(2000)
a1.deposit_amount(2600)
console.log(a1)
a1.withdrawl_amount(2500)
a1.withdrawl_amount(250)
console.log(a1)
console.log(a1.get_Bal())
console.log(a2)
console.log(a3)