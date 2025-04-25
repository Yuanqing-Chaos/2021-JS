"use strict"
// destructuring assignment with array
var des_arr = [1, 2, 3, 4, 5];
const [a, b] = des_arr;  // array destructuring need to follow the order
const [ , , c] = des_arr;  // use empty to skip over previous element
console.log("first two elements are " + a + " " + b);
console.log("the thrid element is " + c);

console.log("--------------------------------------------");

// easy way to swap by using array destructuring assignment
var x = 1; var y = 2;
[x, y] = [y, x];
console.log("swap " + x + " " + y);

console.log("--------------------------------------------");

// combine destructuring with rest operator
const [ , , , ...removeFirstThree_arr] = des_arr;  // skip the first three elements and copy the rest
console.log(JSON.stringify(removeFirstThree_arr));

console.log("--------------------------------------------");

// simple function to create and return object 
/*
 * create_person will create object {name: name, age: age, gender: gender}
 */
const create_person = (name, age, gender) => ({name, age, gender});

// create object contains functions
const temperatureCalculator = {
    celsius: 0,
    fahrenheit() {
        return (this.celsius * 1.8) + 32;
    }
}
console.log(temperatureCalculator.fahrenheit());
temperatureCalculator.celsius = 100;
console.log(temperatureCalculator.fahrenheit());

/* class syntax:
 *    recall that class is the blueprint of object
 *    we can use class to create object
 */
class Person {
    // constructor of the class
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // setter method
    set n(name) {
        this.name = name;
    }
    set a(age) {
        this.age = age;
    }
    set g(gender) {
        this.gender = gender;
    }

    // getter method
    get n() {
        return this.name;
    }
    get a() {
        return this.age;
    }
    get g() {
        return this.gender;
    }

}
let chaos = new Person("GYQ", 23, "Male");
console.log(typeof chaos + " " + JSON.stringify(chaos));
// n, a, g defined in setter can see as intermediate variables
chaos.n = "gyq"; chaos.a = 23.5; chaos.g = "Unknown";
console.log(JSON.stringify(chaos));
