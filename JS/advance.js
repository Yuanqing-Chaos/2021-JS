"use strict";  // enforces stricter parsing and error handling on the code at runtime

// Ternary Operation: <condition> ? <if true statement> : <if false statement>
function compare(x, y) {
    return x > y ? "x is bigger" : (x < y ? "y is bigger" : "x and y are equal");
}
console.log(compare(1, 2) + " " + compare(2, 1) + " " + compare(0, 0));

console.log("------------------------------------------");

/* difference between let and var: 
 *      let variable can only declare once, but var can declare many times
 *      let is block scope, var is function scope
 */
var num = 1;
var num = 2;  // declare twice without error
function test_let() {
    let let_str = "function scope";
    if (true) {
        let let_str = "block scope";
        console.log("I am in " + let_str);
    }
    console.log("I am in " + let_str);
}
function test_var() {
    if (true) {
       var var_str = "function scope";
       console.log("I am in " + var_str);
    }
    console.log("I am in " + var_str);
}
test_let();
test_var();

console.log("------------------------------------------");

const ARR = [0, 0, 0];  // const array can't be reassign, but can mutate the element
console.log(JSON.stringify(ARR));
for (let i = 0; i < ARR.length; i++) {
    ARR[i] = i + 1;
}
console.log(JSON.stringify(ARR));

console.log("------------------------------------------");

// simple arrow function
const magic = () => new Date();  // same as a function called "magic" that return current time  
console.log(magic);
console.log(magic());
// arrow function with parameter
const compete = (a, b) => a > b ? "a is bigger" : a < b ? "b is bigger" : "a, b are equal";
console.log(compete);
console.log(compete(1, 10));
// arrow function utilization: asking function as parameter
function sqrtOfArray(arr) {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(Math.sqrt)
}
console.log(sqrtOfArray([-1, 0.7, 4, 9, 121]));

console.log("------------------------------------------");

// set default value for parameter
const increment = (value, step = 1) => value += step;
console.log(increment(1));
console.log(increment(1, 2));

console.log("------------------------------------------");

// rest operator makes multiple params into one array
const sum = (...args) => args.reduce((a, b) => a + b);
// we can vary the amount of paramters when calling the method
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));

console.log("------------------------------------------");

// spread operator makes copy of array
var arr1 = [0, 0, 0];
var arr1_referrence = arr1;
var arr1_copy = [...arr1];
arr1[0] = 1;
console.log("referrence is " + JSON.stringify(arr1_referrence) + " , copy is " + JSON.stringify(arr1_copy));