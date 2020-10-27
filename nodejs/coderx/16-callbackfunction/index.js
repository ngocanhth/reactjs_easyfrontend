//use function as a parameter

function sum(a,b, cb) {
	if(typeof a !='number' || typeof b !='number') {
		return console.log('Tham so truyen vào phải là kiểu số');
	}
	console.log('Truoc khi goi callback');
	//console.log (a + b);
	cb(undefined, a+b);
	//return a+b;
}

function callback (err, data){
	if(err){
		return console.log(err);
	}
	console.log('Sau khi goi callback');
	return console.log(data + 5);
}

sum(4, 5, callback);


// console.log('Ket thuc ham tinh tong');


// var coffeMachine = {
// 	makecoffee: function(onFinish){
// 		console.log('Making coffee...');
// 		onFinish();
// 	},

// 	makecoffee2: function(onFinish){
// 		console.log('Making coffee 2...');
// 		onFinish();
// 	}
// }

// var beep = function (){
// 	console.log('sau khi making coffe 1 xong');
// 	console.log('Tit tit');
// }


// coffeMachine.makecoffee(beep);


// coffeMachine.makecoffee2(function(){
// 	console.log('sau khi making coffe 2 xong');
// 	console.log('Beep beep');
// });