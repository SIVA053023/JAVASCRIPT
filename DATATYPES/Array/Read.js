let a=[10,20,30]; 
//      0  1  2                   
let b=[10,205,"Rahul",true,undefined] // array can store the heterogenous element and allow duplicates, it stores elements based on indexing,its iterabale.
//      0  1     2      3     4         indexing.
// for to read 'a'                      NEGETIVE INDEXING IS NOT POSSIBLE(-1,-2,-3)
console.log(a[0])  // output is 10
console.log(a[1])  // output is 20
console.log(a[2])  // output is 30
console.log(a[3])  // output is undefined

// for to read 'b'
console.log(b[0])  // output is 10
console.log(b[1])  // output is 205
console.log(b[2])  // output is Rahul
console.log(b[3])  // output is  true
console.log(b[4])  // output is undefind
console.log(b[5])  // output is undefined because there is no 5 indexing

/* Iterating an array  1.  for(){},
                       2. while(){},
                       3.do{} while(condition),
                       4. for(of){}   most of the time we use this iteration */
