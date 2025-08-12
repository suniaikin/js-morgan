let randomWords = [
	"javascript",
	"amazing",
	"pancake",
];

let show = randomWords[Math.floor(Math.random() * randomWords.length)];
/*
console.log(show);
*/

let pickWord = function (word) { return randomWords[Math.floor(Math.random() * randomWords.length)]}
/*
console.log(pickWord(randomWords))
*/

let randomWords2 = ["Planet", "Worm", "Flower", "Computer"];
/*
console.log(pickWord(randomWords2))
*/

function getRandomWords(obj) {
	let result = [];
	for (let key in obj) {
		result.push(obj[key][Math.floor(Math.random() * obj[key].length)]);
	}
	return result;
}

console.log(pickWord(randomWords));
