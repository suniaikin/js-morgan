// 🎃DESCRIPTION🎃
/* Extend the random insult generator so it generates insults */

// ✅SOLUTION✅
let randomWords = ['dog', 'cat', 'horse']
let randomVerbs = ['barking', 'meowing', 'neighing']
let randomAdjectives = ["smelly", "boring", "stupid"];

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomWord2 = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let randomAdjective2 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]

if (randomWord === randomWords[0]) {
	randomVerb = randomVerbs[0]
} else if (randomWord === randomWords[1]) {
	randomVerb = randomVerbs[1]
} else if (randomWord === randomWords[2]) {
	randomVerb = randomVerbs[2]
}


let randomSentence = `Look! That ${randomAdjective} ${randomWord} ${randomVerb} like a ${randomAdjective2} ${randomWord2}`
console.log(randomSentence)

// 💖BEST PRACTICE💖

