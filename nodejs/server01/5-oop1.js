var person = {
	lastname	: "Le",
	firstname	: "Ngoc Anh",
	chaomung	: function () {
		console.log (`chao mung ${this.lastname}  ${this.firstname}`);
	}
}

person.chaomung();