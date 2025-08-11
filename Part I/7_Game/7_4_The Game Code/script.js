// Create an array of words
let words = [
	"javascript",
	"amazing",
	"pancake",
];

let answerWordArray = []

let randomWord = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < randomWord.length; i++) {
	answerWordArray[i] = "_"
}

let remainingLetters = randomWord.length;

let attempts = 0;
let MAX_ATTEMPTS = 6;

while (remainingLetters > 0 && attempts < MAX_ATTEMPTS) {
	alert(answerWordArray.join(" "));
	let guess = prompt(`Guess a letter, or click "Cancel" to stop playing`);
	if (guess === null) break
	if (guess.length !== 1) {
		alert("Please enter a single letter");
	} else {
		let alreadyGuessed = false;
		for (let j = 0; j < answerWordArray.length; j++) {
			if (answerWordArray[j] === guess) {
				alreadyGuessed = true;
				break;
			}
		}
		if (alreadyGuessed) {
			alert("You already guessed that letter.");
			continue;
		}
		let foundLetter = false;
		for (let x = 0; x < randomWord.length; x++) {
			if (randomWord[x] === guess && answerWordArray[x] === "_") {
				answerWordArray[x] = guess;
				if (answerArray[x] !== "_") {
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
    alert("Good job! The answer was " + randomWord);
} else {
    alert("You've stopped the game or ran out of attempts. The word was " + randomWord);
}