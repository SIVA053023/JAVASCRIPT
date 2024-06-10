// Using var
var a = 10;
if (true) {
    var a = 20;
    console.log(a); // Output: 20
}
console.log(a); // Output: 20

// Using let
let b = 10;
if (true) {
    let b = 20;
    console.log(b); // Output: 20
}
console.log(b); // Output: 10

// Using const
const c = 10;
// c = 20; // Error: Assignment to constant variable.
const obj = { name: 'John' };
obj.age = 30; // Valid, modifying property of a const object
console.log(obj); // Output: { name: 'John', age: 30 }