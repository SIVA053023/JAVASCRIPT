let numbers=[2,3,5,89,45,66,44,78,26,23,42]
let even_num=[]
numbers.forEach((num)=>{
    if(num%2===0){
       return even_num.push(num)
    }
})
console.log(even_num)        //output=[ 2, 66, 44, 78, 26, 42 ]