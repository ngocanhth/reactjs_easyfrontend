let square = (a, b, h)	=> (a+b)*h/2;

//console.log(`Dien tich ${square(2,3,2)}`);

let add =	(a, b, cb)	=>	{
	setTimeout(()	=> {
			let err, result;
			if (typeof a	!= 'number' || typeof b	!= 'number' ) {
				return cb( new Error ("Tham số phải là kiểu số"));
			}
			return cb(undefined, a+b);
	}, 1000);
}


let multiply =	(a, b, cb)	=>	{
	setTimeout(()	=> {
			let err, result;
			if (typeof a	!= 'number' || typeof b	!= 'number' ) {
				return cb( new Error ("Tham số phải là kiểu số"));
			}
			return cb(undefined, a*b);
	}, 1000);
}

let devide = (a, b, cb)	=>	{
	setTimeout(()	=> {
			let err, result;
			if (typeof a	!= 'number' || typeof b	!= 'number' ) {
				return cb( new Error ("Tham số phải là kiểu số"));
			}

			if(b==0){
				return new Error("Chia cho 0");
			}
			return cb(undefined, a/b);
	}, 1000);
}


// add(4 , '5', (err, result)	=> {
// 	if (err) {
// 		return console.log(`Loi ${err}`);
// 	}
// 	return console.log(result);
// })

let tinhdientichhinhthang = (a, b, h, cb)	=> {
	add(a, b, (err, result)	=> {
		if(err) {
			return cb(err);
		}
		multiply(result, h, (err, result)	=> {
			if(err) {
				return cb(err);
			}

			devide(result, 2, (err, square)	=> {
				if(err) {
					return cb(err);
				}
				cb(undefined, square);
			});
		});
	});
}

tinhdientichhinhthang(2,3,'2', (err, result)	=> {
	if(err)	return console.log(err + "");
	// if(err)	return console.log(`${err}`);
	console.log(`Dien tich hinh thang la ${result}`);
})


// Đây gọi là Callback hell các đoạn lệnh bất đồng bộ lồng nhau liên tiếp rất khó kiểm soát và debugs code