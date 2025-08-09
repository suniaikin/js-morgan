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
	
	// 1st Step: Show the player their progress - transform their answers Array to a String
	alert(answerArray.join(" "));
	
	// 2nd Step: Get a guess from the player
	let guess  = prompt("Guess a letter, or click Cancel to stop playing");
	
	// Checking if the user input any symbol
	if (guess === null) {
		
		// If no symbol input, exit the game loop
		break;
	}
	
	// If user input a Capital letter
	guess = guess.toLowerCase();
	
	// If user input more than one letter
	if (guess.length !== 1) {
		alert("Please enter a single letter.");
		continue;
	
	// If user input one letter
	} else {
		
		// Set up a variable to check if the Letter was already input
		let alreadyGuessed = false;
		
		// Set up a loop to run through the String and check if the input Letter is already there
		for(let j = 0; j < answerArray.length; j++) {
			
			// If the input Letter equals the symbol saved in answerArray...
			if (answerArray[j] === guess) {
				// ...we state that alreadyGuessed is true and stop the loop
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