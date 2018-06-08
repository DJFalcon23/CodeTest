const fs = require('fs');
const readline = require('readline');
module.exports = function noPipes(data){
	data.replace(/ \|/g, "").replace(/ M /g, " Male ").replace(/-/g, "/").replace(/\b( D | S | G )\b/g, " ")
}
fs.writeFile('_output.txt', '', (err) => {
	if (err) throw err;
	console.log('Output file created.');
});
fs.writeFile('output.txt', '', (err) => {
	if (err) throw err;
	console.log('Output file created.');
});
fs.writeFile('README.txt', '', (err) => {
	if (err) throw err;
	console.log('Output file created.');
});
const rl_0 = readline.createInterface({
	input: fs.createReadStream('pipe.txt')
	, crlfDelay: 200
});
const rl_1 = readline.createInterface({
	input: fs.createReadStream('Comma.txt')
	, crlfDelay: 200
});
const rl_2 = readline.createInterface({
	input: fs.createReadStream('space.txt')
	, crlfDelay: 200
});
const rl_3 = readline.createInterface({
	input: fs.createReadStream('output.txt')
	, crlfDelay: Infinity
});

rl_0.on('line', (input) => {
	let txt0 = input.replace(/ \|/g, "").replace(/ M /g, " Male ").replace(/-/g, "/").replace(/\b( D | S | G )\b/g, " ");
	var arr = txt0.split(" ");
	//console.log(arr.concat(arr.splice(3,1,)).join(" "));
	var stTxt = arr.concat(arr.splice(3, 1, )).join(" ");
	let opTxt0 = stTxt + "\r\n";
	fs.open('_output.txt', 'a+', (err, fd) => {
		if (err) throw err;
		fs.appendFile(fd, opTxt0, (err) => {
			fs.close(fd, (err) => {
				if (err) throw err;
				//console.log('The "data to append" was appended to file!');
			});
			if (err) throw err;
			//console.log(txt1);
		});
	});
});
rl_1.on('line', (input) => {
	let txt1 = input.replace(/,/g, "");
	var arr = txt1.split(" ");
	var stTxt = arr.concat(arr.splice(3, 1, )).join(" ");
	let opTxt1 = stTxt + "\r\n";
	fs.open('_output.txt', 'a+', (err, fd) => {
		if (err) throw err;
		fs.appendFile(fd, opTxt1, (err) => {
			fs.close(fd, (err) => {
				if (err) throw err;
				//console.log('The "data to append" was appended to file!');
			});
			if (err) throw err;
			//console.log(txt1);
		});
	});
});
rl_2.on('line', (input) => {
	let txt2 = input.replace(/-/g, "/").replace(/ M /g, " Male ").replace(/F F/g, "F Female").replace(/H F/g, "F Female");
	let opTxt2 = txt2 + "\r\n";
	fs.open('_output.txt', 'a', (err, fd) => {
		if (err) throw err;
		fs.appendFile(fd, opTxt2, (err) => {
			fs.close(fd, (err) => {
				if (err) throw err;
				//console.log('The "data to append" was appended to file!');
			});
			if (err) throw err;
			//console.log(txt1);
		});
	});
});
rl_3.on('line', (input) => {
	let fOP = input.split(" ");
	var arr = [fOP];
	fOP.sort;
	fs.open('output.txt', 'a', (err, fd) => {
		if (err) throw err;
		fs.appendFile(fd, fOP, (err) => {
			fs.close(fd, (err) => {
				if (err) throw err;
				console.log('The "data to append" was appended to file!');
			});
			if (err) throw err;
			//console.log(txt1);
		});
	});
	//rl_3.close();
});