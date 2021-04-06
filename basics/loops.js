// this will print 11 ;)
let a = 11;
do {
	console.log(a);
	a++;
} while (a <= 10);

// for ... in loop
// key or index is looped
let arr = [100, 101, 107, 102, 113, 97, 120, 99, 38, 69];
for (let val in arr) {
	console.log(val);
}

var person = { fname: 'John', lname: 'Doe', age: 25 };

var text = '';
var x;
for (x in person) {
	text += person[x] + ' ';
}

console.log(text);

// for...of
// this will have the values
for (let x of arr) {
	console.log('printing for the second time', x);
}
