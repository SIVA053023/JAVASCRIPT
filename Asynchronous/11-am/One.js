let goToGOa=(success,failure)=>{
    let bank_bal=600;
    if(bank_bal>10000){
        success('go and Enjoy')

    }
    else{
        failure('go toprostack and practice AS')
    }
}
goToGOa((msg)=>{console.log(msg)},(err)=>{console.log(err)})