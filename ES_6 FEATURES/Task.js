let numbers=[1,2,3,4,5,6,7,8,9,10]

// creat e anew array with only even numbers
let Even_numbers=[]

for(num of numbers){
    if(num%2===0){
        Even_numbers.push(num)
    }
}
console.log(Even_numbers)


let even_num=numbers.map((num)=>{
        //  if(num%2===0){
        // return num
        //  }
        return num%2===0
       
})
 console.log(even_num)