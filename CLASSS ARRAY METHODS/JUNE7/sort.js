// here we are using the sort  to arrange the numbers in descending order

let num=[30,35,23,56,89,25,34]
//let Asc=num.sort();
//console.log(Asc);

 num.sort(function(a,b){
    return b - a;
 })
 console.log(num);
