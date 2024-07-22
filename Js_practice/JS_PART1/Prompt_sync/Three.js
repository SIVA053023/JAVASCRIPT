const input= require('prompt-sync')()
let num=parseInt(input('enter number:'))
if(num%2==0){
    console.log("It is a even number")
}
else{
    console.log("odd number")
}