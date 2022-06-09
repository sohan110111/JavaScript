const person = {
    name: 'John',
    age: 34,
    getName : function() {
        return 'John';
    }
}

person.name = 'Akash' // mutable concept
console.log(person);
console.log(person.getName());

let number = 2;
number = 78; // this is for immutable concept.
console.log(number)

// empty javaScript object
const randomProperties = {}; 
randomProperties.name = "Akash"
randomProperties.Function = function () { return "Daraz"}
console.log(randomProperties.Function());
console.log(randomProperties)

// javaScript contains a single value
const javaScriptObject = "Contain single value"
console.log(typeof javaScriptObject);

const x = person;
x.age = 10;
console.log(x); // x = person same
console.log(person); // x = person same