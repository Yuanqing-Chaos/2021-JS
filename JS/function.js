var arr_1 = [1, 2, 3];
var arr_2 = [134565];
// Note how we define functions in Javascript
function f_1(arr) {
    console.log(JSON.stringify(arr));  // JSON.stringfy == toString()
    arr.push(arr[arr.length - 1] + 1);
}
f_1(arr_1);
// array is passed by referrence
console.log(JSON.stringify(arr_1));
f_1(arr_2);
console.log(JSON.stringify(arr_2));

console.log("---------------------------------------");

// Try out scope of different variable
function f_2() {
    no_head = "global variable";
    var var_head = "function scope variable";
}
function f_2_test() {
    console.log("no_head is " + typeof no_head);
    console.log("var_head is " + typeof var_head)
}
f_2();
f_2_test();

console.log("---------------------------------------");

// local variable take precedence before global variable
var global = "global variable";
function f_3() {
    var global = "local variable";
    return global;
}
console.log(f_3());
console.log(global);

console.log("---------------------------------------");

function f_4(x, y) {
    if (x == y) {  // "==" will convert x and y to same type
        console.log("x and y are equal");
    } else {
        console.log("x and y are NOT equal");
    }
    if (x === y) {  // "===" will check type equal
        console.log("x and y are strictly equal");
    } else {
        console.log("x and y are NOT strictly equal");
    }
}
f_4(1, 1);
f_4(1, "1");

console.log("---------------------------------------");

// a special way to use switch
function f_5(num) {
    switch(num) {
        case 1:
        case 2:
            return "shit";
        case 3:
        case 4:
            return "Oh shit";
        case 5:
        case 6:
            return "Oh shoot";
        default:
            return "Whatever";
    }
}
console.log(f_5(1) + "  " + f_5(3) + "  " + f_5(6) + "  " + f_5(-1));