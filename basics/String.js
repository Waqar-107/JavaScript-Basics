let str = new String('a long string');

console.log(str.length);
console.log(str.charAt(2));
console.log(str.charCodeAt(2));
console.log(str.concat(', asholei?'));
console.log(str.indexOf('n'));
console.log(str.lastIndexOf('n'));

// 0 means match. -1 means parameter is greater, 1 means parameter is smaller
console.log('100'.localeCompare('101'));
console.log('100'.localeCompare('100'));
console.log('101'.localeCompare('100'));

console.log(str.match(/.long./i));
console.log(str.slice(1, 4));
console.log(str.substr(1, 4));
console.log(str.substring(1, 4));
console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());
