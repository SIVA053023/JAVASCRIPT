class Account{
    min_bal=500;
    open_account(){
        console.log("open acoount successfully")
    }
    deposite_amount(){
        console.log("amount deposited successfully")
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
let a1=new Account
a1.open_account();
a1.deposite_amount()
a1.get_Bal()
a1.close_Account()

console.log(a1)