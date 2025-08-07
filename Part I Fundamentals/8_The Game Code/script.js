// Create an array of words
let words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
];

// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// Set up the answer array
let answerArray = [];
for (let i = 0; i < words.length; i++) {
	answerArray[i] = "_";
}
let remainingLetters = words.length;

// The game loop
while (remainingLetters > 0) {

	
}