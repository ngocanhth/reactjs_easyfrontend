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

add(4 , '5', (err, result)	=> {
	if (err) {
		return console.log(`Loi ${err}`);
	}
	return console.log(result);
})