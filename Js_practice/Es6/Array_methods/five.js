//removing the duplicates from the Array by using the filter ,reduce,set methods

let numbers=[45,123,79,45,25,46,312,46]

// FILTER method
let num=numbers.filter((num,index)=>{
    return numbers.indexOf(num)===index
})
console.log(num)
// reduce method
let reduce=numbers.reduce((a,b)=>{
    if(!a.includes(b)){
       a.push(b)
    }
    return a
},[])
console.log(reduce)

// SET method
let set=[...new Set(numbers)]
console.log(set)