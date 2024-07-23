class Account{
    acc_id;
    acc_name;
    acc_bal=0;
    min_bal=500
    constructor(id,name,amount){
        this.acc_id=id
        this.acc_name=name
        this.acc_bal=amount
      

    }
}
let a1=new Account(101,"Siva",50000)
console.log(a1)

let a2= new Account(102,"Rahul",75000)
console.log(a2)