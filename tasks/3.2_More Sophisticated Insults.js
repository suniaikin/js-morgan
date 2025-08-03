// 🎃DESCRIPTION🎃
/* Extend the random insult generator so it generates insults
like “Your [body part] is more [adjective] than a [animal]’s
[animal body part].” (Hint: You’ll need to create another
array. */

// ✅SOLUTION✅
let randomWords = ['dog', 'cat', 'horse']
let randomVerbs = ['meows', 'barks', 'neighs']

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomVerb = randomVerbs[Math.floor(Math.random() * randomVerbs.length)]

let randomSentence = `Look! That ${randomWord} ${randomVerb} like a ${randomWord}`
console.log(randomSentence)

// 💖BEST PRACTICE💖

