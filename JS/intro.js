// press cmd + opt + I to invoke developer tool in Chrome
// run js code in terminal with "Node <filename>.js"

/* 
 * 7 types of Data types: 
 *  undefined, null, boolean, string, symbol, number, and object
 */

var myName =  3;  // var with scope of function
myName = "Chaos";  // variable doesn't have fix type

let gender = "male";  // with scope of block

const PI = 3.14;  // never change (use capital letter name)

console.log(myName + " is a " + gender + " and a " + PI);  // print to the console

var escape_1 = "this is a \"quotation mark\"";  // escape sequences
var escape_2 = 'this is another "quotation mark"';  // single quotation mark for String
var escape_3 = `'quotation' and "quotations"`;

// treat string as immutable array
var strLength = escape_1.length;
var strIndex = escape_1[0];

// JS Array doesn't have type limitation
/* 
 * Other Function: pop() remove the last element
 *                 shift() remove the first element
 *                 unshift() add a element to the front
 */
var arr = ["Chaos", 23, true, [1.01, 2.22]];
console.log(arr);
arr.push([1, [2, 3]]);  // append elements to the end of array
console.log(arr[4][1][1]);

// Template Literials `...`
/*
 * Benefits: 1. Can change new line inside string
 *           2. Can add "" and '' inside string
 *           3. Can print variable with ${<var name>}
 */
var temp_literial = `Hello!!!
My name is ${myName}!!
we need to escape " and ' in string!`;
console.log(temp_literial);