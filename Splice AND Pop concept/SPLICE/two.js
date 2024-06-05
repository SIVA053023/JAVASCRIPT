//         REMOVING ELEMENTS

let fruits=['mango','orange','appple','grapes','papaya'];
//            0      1      2      3      4
let removed_fruits=fruits.splice(1,2);         // here we are removing the orange and the apple from array and equating it to remaing_fruits
console.log(removed_fruits);                  // output =[orange,apple ] because we are removing these fruits
console.log(fruits);                         // output =[mango,grapes,papaya] because after removing those fruits remaining are these fruits only