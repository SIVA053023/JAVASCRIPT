let Account=require('./Account')
class SA extends Account{
    acc_id;
    acc_bal=0;
    min_bal=2000;
    constructor(id,name,mail,bal,addr){
        super(name,mail,addr)
        this.acc_id=id
        this.acc_bal=bal

    }
    get_bal(){
        return this.acc_bal=this.acc_bal-this.min_bal
    }
}
let sa1=new SA(101,"Krishna","sivakrihsna053@gmial.com",85000,"Mysore")
console.log(sa1)
console.log(sa1.get_bal())
