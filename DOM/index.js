document.getElementById('firstH').style.fontSize = '40px';

let tags = document.getElementsByTagName('h2');
console.log(tags);

let containers = document.getElementsByClassName('container');
console.log(containers);

document.getElementsByClassName('test')[0].innerHTML = 'text';

document
	.getElementById('clicker')
	.addEventListener(
		'click',
		() => (document.getElementById('PP').style.color = 'red')
	);
