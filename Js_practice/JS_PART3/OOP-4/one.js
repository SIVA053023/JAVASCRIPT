class Account{
    constructor(){
        console.log("Account class Constructor")
    }
}
class SA extends Account{
    constructor(){
        super()
        console.log("SA account created successfully")
    }
}
let s1=new SA()
console.log(s1)