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
// Change the word's letters to _
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
// Set up a variable for calculation of the rest letters
let remainingLetters = word.length;
// Set up a variable to calculate attempts
let attempts = 0;
let MAX_ATTEMPTS = 6;




// THE GAME LOOP
while (remainingLetters > 0 && attempts < MAX_ATTEMPTS) {

	alert(answerArray.join(" "));

	let guess = prompt("Guess a letter, or click Cancel to stop playing");
	if (guess === null) {
		break;
	}
	guess = guess.toLowerCase();
	if (guess.length !== 1) {
		alert("Please enter a single letter.");
		continue;
	} else {

		let alreadyGuessed = false;
		for (let j = 0; j < answerArray.length; j++) {
			(answerArray[j] === guess) {
				alreadyGuessed = true;
				break;
			}
		}
		if (alreadyGuessed) {
			alert("You already guessed that letter.");
			continue;
		}
		let foundLetter = false;
		for (let y = 0; y < word.length; y++) {
			if (word[y] === guess && answerArray[y] === "_") {
				answerArray[y] = guess;
				if (answerArray[y] !== "_") {
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
	alert("Good job! The answer was " + word.toLocaleUpperCase);
} else {
	alert("You've stopped the game or ran out of attempts. The word was " + word);
}