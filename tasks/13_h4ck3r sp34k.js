// 🎃DESCRIPTION🎃
/* Turn text into h4ck3r sp34k! A lot of people on the Internet
like to replace certain letters with numbers that look like
those letters. Some numbers that look like letters are 4 for
A, 3 for E, 1 for I, and 0 for O. Even though the numbers look
more like capital letters, we’ll be replacing the lowercase
versions of those letters. */

// ✅SOLUTION✅
const inputSentence = "javascript is awesome";
let outputSentence = "";
const SYMBOLS = {
	a: 4,
	e: 3,
	i: 1,
	o: 0
}
for (let i = 0; i < inputSentence.length; i++) {
	if (inputSentence[i] === "a") {
		outputSentence += SYMBOLS.a
	} else if (inputSentence[i] === "e") {
		outputSentence += SYMBOLS.e
	} else if (inputSentence[i] === "i") {
		outputSentence += SYMBOLS.i
	} else if (inputSentence[i] === "o") {
		outputSentence += SYMBOLS.o
	} else {
		outputSentence += inputSentence[i]
	}
}
console.log(outputSentence);

// 💖BEST PRACTICE💖

const input = "javascript is awesome";
let output = "";
const NEW_SYMBOLS = {
	a: 4,
	e: 3,
	i: 1,
	o: 0
}
for (let i = 0; i < input.length; i++) {
	let currentLetter = input[i]
	if (NEW_SYMBOLS[currentLetter] !== undefined) {
		output += NEW_SYMBOLS[currentLetter];
	}
else {
		output += input[i]
	}
}
console.log(outputSentence);