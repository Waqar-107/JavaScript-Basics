let arr = [60, 28, 12, 243, 23, 11];

// adds in the last
console.log(arr.concat([107]));

// push a element
arr.push(107);
console.log(arr);

// pop the last
arr.pop();
console.log(arr);

// check if every element satisfies sth - takes a cb
console.log(arr.every((val) => val < 100));

// filter - takes a cb
console.log(arr.filter((val) => val < 100));

// for-each
arr.forEach((val) => console.log(val + 2));

console.log(arr.join(', '));

// shift - removes the first element and returns it
console.log(arr.shift());

// unshift - adds in the front and return the new length of the array
console.log(arr.unshift(111, 113));
