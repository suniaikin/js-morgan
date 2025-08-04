// 🎃DESCRIPTION🎃
/* Make your own random insult generator with your own set of words. */

// ✅SOLUTION✅
let randomWords = ['dog', 'cat', 'horse']
let randomVerbs = ['meows', 'barks', 'neighs']

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomVerb = randomVerbs[Math.floor(Math.random() * randomVerbs.length)]

let randomSentence = `Look! That ${randomWord} ${randomVerb} like a ${randomWord}`
console.log(randomSentence)

// 💖BEST PRACTICE💖

