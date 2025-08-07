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
	// Show the player their progress
	alert(answerArray.join(" "));
	// Get a guess from the player
	let guess = prompt("Guess a letter, or click Cancel to stop playing")
	if (guess === null) {
		// Exit the game loop
		break;
	} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
	
	}
	
}