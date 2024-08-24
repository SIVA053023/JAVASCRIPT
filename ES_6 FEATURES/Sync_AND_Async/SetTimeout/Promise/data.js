let goToGoa=(Success,failure)=>{
      let Acc_bal=5000;

      if(Acc_bal>=10000){
        Success("go and enjoyyy")
      }
      else{
        failure("go to pg and practice")
      }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})             // output=  go to pg and practice

// goToGoa()
// .then((msg)=>{
//     console.log(msg)                this is wrong code
// }).catch((err)=>{
//      console.log(err)
// })

