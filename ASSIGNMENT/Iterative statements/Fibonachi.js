/* Write a program to print the Fibonacci number series up to a given number.
 Expected out 17-: 0 1 1 2 3 5 8 13 */

 function fibonacciSequence(n) {
    let first = 0, second = 1, next;

    console.log("Fibonacci sequence:");
    for (let i = 1; i <= n; ++i) {
        console.log(first);

        next = first + second;
        first = second;
        second = next;
    }
}

const count = 10; // Change this to the number of Fibonacci numbers you want to generate
fibonacciSequence(count);
