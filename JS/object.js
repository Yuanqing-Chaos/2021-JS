// create object (similar to struct + map)
var person = {
    name: "Chaos",  // note we are using : instead of =
    age: 23,
    friends: ["A", "B", "C"]
}
console.log(person);

console.log("---------------------------------------------");

// different ways to access object's field
console.log(person.name);
console.log(person["age"]);
console.log(person['friends']);

console.log("---------------------------------------------");

// adding and deleting new field to object
person.gender = "male";
person["grade"] = "A";
delete person.friends;
console.log(person);
// hasOwnProperty() can check field existence
// <field> || "no such field exist" => get the field or the message

console.log("---------------------------------------------");

// can't reassign const object, but can mutate field inside it
const TEST_OBJ = {a: 0};
TEST_OBJ.a = "try to freeze me";
console.log(TEST_OBJ);
// use Object.freeze() to make object immutable
Object.freeze(TEST_OBJ);
TEST_OBJ.a = "you cannot freeze me";
console.log(TEST_OBJ);

console.log("---------------------------------------------");

// destructuring assignment for object
var destruc = {assignment: "JavaScript", 
               due: new Date(), 
               grade: 4.0, 
               professor: {name: "Chaos", pos: "professor"}};
var {assignment : a, due : d, grade : g} = destruc;  // <field name> : <var name>
console.log("The " + a + " is due at " + d + " and the grade is " + g);
var {professor : {name : n}} = destruc;  // getting the nested field with destructuring
console.log("The grading person is " + n);

console.log("---------------------------------------------");

// destructuring assignment for parameter
const getGrade = ({grade}) => grade;
console.log(getGrade(destruc));