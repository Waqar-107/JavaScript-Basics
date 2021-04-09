let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('done'), 2000);
	setTimeout(() => reject('error'), 1000);
});

promise
	.then(console.log)
	.catch(console.log)
	.finally(() => console.log("finally we're here"));
