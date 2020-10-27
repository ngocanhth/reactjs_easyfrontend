//khai bao opject kieu constructor function

function khoahoc (ten, hocphi) {
	this.ten = ten;
	this.hocphi = hocphi;
}

khoahoc.prototype.mota = function () {
	console.log (`khoa hoc lap trinh  ${this.ten  + this.hocphi}`);
}

var nodejs = new khoahoc('nodejs', 800);

nodejs.mota();