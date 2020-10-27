let fs = require("fs");
let readlineSync = require("readline-sync");
let students = [];


function loadData(){
	let fileContent = fs.readFileSync("./data.json", {encoding: 'utf-8'});
	// if(listStudentsString == null && listStudentsString == ""){
	// 	return console.log(new Error("File phải có nội dung") + "");
	// }
	students = JSON.parse(fileContent);
}

function showmenu (){
	console.log("1. Show list all students");
	console.log("2. Create a new student");
	console.log("3. Save and exit");

	let option = readlineSync.question('>');
	switch (option) {
		case '1':
			showListStudent();
			showmenu();
			break;
		case '2':
			createNewStudent();
			showmenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log('Wrong option');
			showmenu();
			break;
	}
}

function showListStudent(){
	console.log(`Danh sách sinh viên: `);
	for (let student of students) {
		console.log(`${student.name} MSSV:  ${student.mssv}`);
	}
}

function createNewStudent(){
	let name = readlineSync.question('your name? ');
	let mssv = readlineSync.question('Ma so sinh vien? ');

	let student = {
		name: name,
		mssv: mssv
	}
	students.push(student);
}

function saveAndExit(){
	let studentStringJSON = JSON.stringify(students);
	fs.writeFileSync("./data.json", studentStringJSON, {endcoding: 'utf-8'});
}

function main(){
	loadData();
	console.log();
	showmenu();
}

 main();