/**

1 function cũng là 1 object nên có thể lưu giá trị trong 1 biến
1 function có thể nhận tham số của 1 function khác, gọi là callback function

**/


let arr = [2,34,5,6];

let item = e => e*e;

let newarr = arr.map(item);
//console.log(newarr);



/**

1 function có thể return về 1 function

**/

let getFunction	= number => {
	if (number >0){
		return ()	=>	console.log('So duong');
	}
		return ()	=>	console.log('So am');
}

getFunction(-1)();
