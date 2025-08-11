let ourFirstFunction = function () {
	console.log("Hello world!");
}
ourFirstFunction()

let sayHelloTo = function (name) {
	console.log("Hello " + name + "!");
}

sayHelloTo("Nick")

let drawCats = function (howManyTimes) {
	for (let i = 0; i < howManyTimes; i++) {
		console.log(i + " =^.^= ");
	}
}


let printMultipleTimes = function (howManyTimes, whatToDraw) {
	for (var i = 0; i < howManyTimes; i++) {
		console.log(i + " " + whatToDraw);
	}
}
printMultipleTimes(5, "hello world!");