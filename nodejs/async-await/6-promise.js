/*
	Promise lad 1 lớp đối tượng nên có thể tạo các obj từ đối tượng promise bằng từ khóa new
*/


let apromise = new Promise ((resolve, reject) => {
	//console.log('hello');

	//resolve("Thanh Cong");

setTimeout(() => {
	//reject(new Error("Khong the ket noi den server"));
	resolve("Thanh Cong");
}, 2000);

});

apromise.then(mgs	=> console.log(`Da thuc thi: ${mgs}`),
	errMsg	=> console.log(errMsg + ""));

