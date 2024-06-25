
class Account{
    min_Bal=500;
    
    open_Account(){
        console.log("Account Opened Successfullly")
    }
    deposit_Amount(amount){
        console.log(amount "deposited successfully")
    }
    withdrawl_Amount(){
        console.log("Insuffient Bal")
    }
    get_St(){
        console.log("Pay 50 Rs")
    }
    get_Bal(){
        console.log("Server Busy!")
    }
    close_Account(){
        console.log("Negative Bal- deposite more!")
    }
}
let a1=new Account();
a1.open_Account()
a1.deposit_Amount(5000)
a1.withdrawl_Amount()
a1.get_Bal()
a1.get_St()
a1.close_Account()

console.log(a1)
