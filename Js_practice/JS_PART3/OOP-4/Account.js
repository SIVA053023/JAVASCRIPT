class Account{
    acc_name;
    acc_mail;
    acc_address;
    constructor(name,mail,addr){
        this.acc_name=name
        this.acc_mail=mail
        this.acc_address=addr
    }
}
class SA extends Account{
         acc_id;
         acc_bal=0
         min_bal=500

    constructor(id,name,mail,bal,addr){
        super(name,mail,addr)
        this.acc_id=id
        this.acc_bal=bal
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
}
let s1=new SA(101,"Siva","siva053023@gmail.com",50000,"podalakur")
console.log(s1)
console.log(s1.get_bal())

class CA extends Account{
    acc_id;
    acc_bal=0
    min_bal=25000
    constructor(id,name,mail,amount,addr){
        super(id,name,mail)
        this.acc_id=id
        this.acc_bal=amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
}
let ca1=new CA(102,"Krishna","krishna053@gmail.com",80000,"New_Delhi")
console.log(ca1)
console.log(ca1.get_bal())