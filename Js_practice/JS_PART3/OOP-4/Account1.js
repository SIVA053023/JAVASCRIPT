class Account{
    acc_id;
    acc_name;
    email_addr;
    constructor(id,name,mail){
        this.acc_id=id
        this.acc_name=name
        this.email_addr=mail
    }

}
class SA extends Account{
    acc_bal=0
    min_bal=500
    constructor(id,name,mail,amount){
        super(id,name,mail)
        this.acc_bal=amount
    }
}
let s1=new SA()
console.log(s1)