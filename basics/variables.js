let userName = 'enosis'; // string
let age = 12; // number
let isWorkingFromHome = true; // boolean
const address = 'gulshan-1';

let firstName = undefined;
let lastName = null;

// check how the type gets changed
console.log(typeof userName);
userName = 107;
console.log(typeof userName);

let person = {
	name: 'waqar',
	age: 25,
};

console.log(person);

// access object props
// dot notation
person.name = 'waqar hassan khan';
console.log(person);

// bracket notation
person['age'] = 25.5;
console.log(person);

// array
let colors = ['blue', 'red', 'green'];
console.log(colors[0], colors.length);
