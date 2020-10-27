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

//add(4,'5').then(res => console.log(res), err => console.log(`${err}`));

fs.readFile("./danhsach.txt", "UTF-8", (err, data) => {
	if(err) {
		return console.log("Loi" + err);
	}
	//console.log(data);

});

/*Viet theo kieu promise*/

let promiseRead = new Promise((resolve, reject) => {
	fs.readFile("./danhsach.txt", "UTF-8", (err, data) => {
	if(err) {
		return reject(new Error(err));
	}
		resolve (data);
		/*Viet theo kieu promise*/
	});
});

//promiseRead.then(data => console.log(data), err => console.log(err +""));



let read = filename => {
	return new Promise ((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
}

read("./danhsach.txt").then((data) => console.log(data), (err) => console.log(err + ""));