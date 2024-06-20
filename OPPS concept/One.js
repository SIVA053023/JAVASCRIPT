class Account{                                                   // date 20-06-2024
    acc_bal=0;
    min_bal=500;
    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount; // this is pointer pointing to current object with in class we use this and outside we use the object
    }
    get_bal(){
        return this.acc_bal-this.min_bal;
    }
    withdrawl_amount(amount){
        this.acc_bal=this.acc_bal-amount;

    }


}
let a1=new Account();
     a1.deposit_amount(5000);
     a1.deposit_amount(50);
     a1.get_bal();
     a1.withdrawl_amount(2000);
     console.log(a1.get_bal());
     //console.log(a1.withdrawl_amount());
