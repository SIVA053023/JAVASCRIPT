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