function x() {
	let a = 7;
	function y() {
		let b = 107;

		function z() {
			console.log(a, b, a + b);
		}

		z();
	}

	y();
}

x();
