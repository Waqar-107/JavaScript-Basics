let arr = [
	{
		name: 'mikasa ackerman',
		roll: 2,
	},

	{
		name: 'eren yeager',
		roll: 1,
	},

	{
		name: 'armin arlert',
		roll: -1,
	},

	{
		name: 'levi ackerman',
		roll: 111,
	},
];

arr.sort((a, b) => a.roll - b.roll);
console.log(arr);

arr.sort((a, b) => b.roll - a.roll);
console.log(arr);

// sort on the basis of wnd char
arr.sort((a, b) => {
	if (a.name[1] == b.name[1]) return 0;
	else if (a.name[1] > b.name[1]) return 1;
	else return -1;
});
console.log(arr);
