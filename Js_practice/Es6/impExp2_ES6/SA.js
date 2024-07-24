import Account from './Account.js'
class SA extends Account{
    acc_id;
   acc_bal=0;
   min_bal=500;
   constructor(id,name,mail,Amount,addr){
    super(name,mail,addr)
    this.acc_id=id
    this.acc_bal=Amount
   }
   deposite(Amount){
     this.acc_bal=this.acc_bal + Amount
   }
   get_bal(){
    return this.acc_bal=this.acc_bal - this.min_bal
   }
}
let sa1=new SA(101,"Shiva","siva053@gmail.com",56000,"Banglore")
console.log(sa1)
// console.log(sa1.get_bal())
sa1.deposite(12000)
console.log(sa1)