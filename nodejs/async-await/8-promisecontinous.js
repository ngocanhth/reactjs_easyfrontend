let fs = require("fs");

let add = (a, b)	=> {
	return new Promise ((resolve, reject)	=> {
		setTimeout(()	=>	{
			if (typeof a != "number" || typeof b != "number") {
				reject(new Error("Tham so phai la kieu so"));
			}
			resolve(a + b);

		}, 2000);
	});
}

let multiply = (a, b)	=> {
	return new Promise ((resolve, reject)	=> {
		setTimeout(()	=>	{
			if (typeof a != "number" || typeof b != "number") {
				reject(new Error("Tham so phai la kieu so"));
			}
			resolve(a*b);

		}, 2000);
	});
}

let devided = (a, b)	=> {
	return new Promise ((resolve, reject)	=> {
		setTimeout(()	=>	{
			if (typeof a != "number" || typeof b != "number") {
				reject(new Error("Tham so phai la kieu so"));
			}
			if (a == 0) {
				reject(new Error("Chia cho so 0"));
			}
			resolve(a/b);

		}, 2000);
	});
}

// let square = (a, b, h)	=> {
// 	add(a, b).then(res => multiply(res, h))
// 	.then( ressult => devided (ressult, 2))
// 	.then(square => console.log(`Dien tich hinh thang ${square}`))
// 	.catch (err => console.log(`Co loi xay ra: ${err}`));
// }
// square(2, 4 ,5);


let square = (a, b, h)	=> {
	return add(a, b).then(res => multiply(res, h))
	.then( ressult => devided (ressult, 2))
}

square(2, 4 , 5).then (square => console.log(`Dien tich hinh thang ${square}`))
.catch (err => console.log(`Co loi xay ra ${err}`));

// add('4',5).then(res => add(res, 6))
// .then(res => console.log(`Ket qua la ${res}`)).catch(err => console.log(`Loi ${err}`));