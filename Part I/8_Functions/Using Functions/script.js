let randomWords = [
	"javascript",
	"amazing",
	"pancake",
];

let show = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(show);

let pickWord = function (word) {
	return randomWords[Math.floor(Math.random() * randomWords.length)]
}

console.log(pickWord(randomWords))