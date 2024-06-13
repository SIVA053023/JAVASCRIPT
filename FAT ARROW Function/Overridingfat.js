// heer we are using the Fat Arrow function you can get an idea now; here is no overriding
//A
var wish=()=>{
    console.log("Good morning")
}
wish();

//B
var wish=()=>{
    console.log("Good Afternoon")  // here there is no overriding hence output= "Good morning" "Good Afternoon"
}
wish();
