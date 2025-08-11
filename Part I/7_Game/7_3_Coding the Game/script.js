//=== Choosing a Random Word

const words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
]
//=== Function of choosing a random word

const word = words[Math.floor(Math.random() * words.length)]

//=== Creating the Answer Array

let answerArray = []
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
console.log(answerArray);

//=== How many letters are left to be guessed

let remainingLetters = word.length

/* Every time the player guesses a correct letter, this value will be decremented (reduced) by 1 for each instance of that letter in the word.*/


//=== Showing the Player’s Progress

alert(answerArray.join(" "));

//=== Handling the Player’s Input

let guess = prompt("Guess a letter, or click Cancel to stop playing.");

while (remainingLetters > 0) {
	if (guess === null) {
		break
	} else if (guess.length !== 1) {
		alert("Please enter a single letter!");
	} else {
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--
			}
		}
	}
}
