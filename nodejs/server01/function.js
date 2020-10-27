function tinhtong (a, b) {
	return a + b;
}

var tong = tinhtong (3, 8);
//console.log(tong);

function hello () {
	console.log('hello world 1');
}

function callback (fn) {
	fn();
}

//callback (hello);

var tong = function (a, b) {
	return a + b;
}

console.log (tong(4,5));