// this is over riding in normal function
// A
function wish(){
    console.log("good morning")
}
wish()
// B
function wish(){
    console.log("Goood Afternoon") // here the function B override the function A and prints "Goood Afternoon""Goood Afternoon"
}
wish()
