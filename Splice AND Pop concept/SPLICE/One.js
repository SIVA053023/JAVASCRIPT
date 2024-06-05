let shirt_cost=[299,399,499,599,699,799];
//   indexing=   0   1    2   3   4   5       
shirt_cost.splice(1,2);                 // which means we are removing the 1,2 indexing values from the array
console.log(shirt_cost);               // output is [299,5999,699,799]