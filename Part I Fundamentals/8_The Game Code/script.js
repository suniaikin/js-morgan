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
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
let remainingLetters = word.length;


// Attempts
let attempts = 0;
let MAX_ATTEMPTS = 3;

// The game loop
while (remainingLetters > 0 && attempts < MAX_ATTEMPTS) {
	// Show the player their progress
	alert(answerArray.join(" "));
	// Get a guess from the player
	let guess  = prompt("Guess a letter, or click Cancel to stop playing");
	if (guess === null) {
		// Exit the game loop
		break;
	}
	guess = guess.toLowerCase();
	if (guess.length !== 1) {
		alert("Please enter a single letter.");
		continue;
	} else {
		// Update the game state with the guess
		let alreadyGuessed = false;
		for(let j = 0; j < answerArray.length; j++) {
			if (answerArray[j] === guess) {
				alreadyGuessed = true;
				break;
			}
		}
		if (alreadyGuessed) {
			alert("You already guessed that letter.");
			continue;
		}
		let foundLetter = false;
		for (let x = 0; x < word.length; x++) {
			if (word[x] === guess && answerArray[x] === "_") {
				answerArray[x] = guess;
				if (answerArray[x] !== "_" ) {
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