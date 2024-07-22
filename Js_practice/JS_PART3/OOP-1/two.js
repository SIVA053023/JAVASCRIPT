class Account{
    acc_id=101;
    acc_name="Rahul"
    open_Account(){
      console.log("Account open successfully")
    }
}
let a1=new Account()
console.log(a1)
console.log(a1.acc_id)
console.log(a1.acc_name)
a1.open_Account()