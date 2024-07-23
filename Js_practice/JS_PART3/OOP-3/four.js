class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    open_acc(){
        console.log("Account open successfully")
    }
    deposite_amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    with_drawl(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
    get_bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let a1=new Account(101,"Siva",55000)
a1.deposite_amount(5000)
a1.with_drawl(10000)
console.log(a1)
console.log(a1.get_bal())