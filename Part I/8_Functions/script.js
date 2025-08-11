let ourFirstFunction = function () {
	console.log("Hello world!");
}
let sayHelloTo = function (name) {
	console.log("Hello " + name + "!");
}

let drawCats = function (howManyTimes) {
	for (let i = 0; i < howManyTimes; i++) {
		console.log(i + " =^.^= ");
	}
}


let printMultipleTimes = function (howManyTimes, whatToDraw) {
	for (let i = 0; i < howManyTimes; i++) {
		console.log(i + " " + whatToDraw);
	}
}
// printMultipleTimes(5, "hello world!");

let show = 5 + Math.floor(1.2345);

let double = function (number) {
 return number * 2;
}

double(120)