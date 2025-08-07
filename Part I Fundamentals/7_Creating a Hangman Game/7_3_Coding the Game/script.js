// Choosing a Random Word
const words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
]
const word = words[Math.floor(Math.random()*words.length)]

// Creating the Answer Array
let answerArray = []
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

let remainingLetters = word.length
console.log(answerArray)
