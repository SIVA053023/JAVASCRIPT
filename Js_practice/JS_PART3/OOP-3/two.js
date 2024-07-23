class Account{
    acc_id;
    acc_name;
    acc_bal=0
    constructor(id,name,bal){
        this.acc_id=id
        this.acc_name=name
        this.acc_bal=bal
    }
}
let a1=new Account(101,"Rahul",5000)
console.log(a1)