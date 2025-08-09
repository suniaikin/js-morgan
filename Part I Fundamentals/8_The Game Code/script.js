// Create an array of words
let words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake",
	"lowercase",
	"programming",
	"computer"
];
// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
let answerArray = [];
for (let i = 0; i < words.length; i++) {
	answerArray[i] = "_";
}
let remainingLetters = words.length;

// Attempts
let attempts = 0;
let MAX_ATTEMPTS = 3;

// The game loop
while (remainingLetters > 0 && attempts < 6) {
	// Show the player their progress
	alert(answerArray.join(" "));
	// Get a guess from the player
	let guess = prompt("Guess a letter, or click Cancel to stop playing").toLowerCase();
	if (guess === null) {
		// Exit the game loop
		break;
	} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
		// Update the game state with the guess
		let foundLetter = false;
		let usedLetter = false;
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess && answerArray[j] === "_") {
				answerArray[j] = guess;
				if (answerArray[j] !== "_" ) {
					remainingLetters--;
					foundLetter = true;
				}
			}
		}
		if (foundLetter === false) {
			attempts++
			alert(`Wrong letter! You have ${MAX_ATTEMPTS - attempts} left!`);
			
		}
	}
	
}

if (remainingLetters === 0) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
} else {
    alert("You've stopped the game or ran out of attempts. The word was " + word);
}