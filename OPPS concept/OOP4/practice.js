class Account{
     Ac_name;
     Ac_email;
     addr;
     constructor(name,mail,address){
        this.Ac_name=name;
        this.Ac_email=mail;
        this.addr=address;
     }
}
class Siva extends Account{
    Ac_id;
    Ac_bal=0;
    min_bal=500;
    constructor(id,name,mail,address,amount){
        super(name,mail,address);
        this.Ac_id=id;
        this.Ac_bal=amount;
        
    }
    get_bal(){
        return this.Ac_bal-this.min_bal;
    }

}
let s1=new Siva(101,"Siva","Sivakrishna053@gmail.com","new_delhi",95000)
console.log(s1);
class krishna extends Account{
    Ac_id;
    Ac_bal=0;
    min_bal=500;
    constructor(id,name,mail,address,amount){
        super(name,mail,address);
        this.Ac_id=id;
        this.Ac_bal=amount;
    }
    get_bal(){
        return this.Ac_bal-this.min_bal;
    }
}
let k1=new krishna(102,"krishna","krishna053@gmail.com","Banglore",59000)
console.log(k1);
console.log(s1.get_bal())
console.log(k1.get_bal())