// 🎃DESCRIPTION🎃
/*  For each key in the wordsSet object, print a random word from the corresponding array.*/

// ✅SOLUTION✅

const wordsSet = {
	bodyParts: ["Face", "Nose", "Hair"],
	adjectives: ["Smelly", "Boring", "Stupid"],
	words: ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
};

// for (let key in wordsSet) {
// 	console.log(wordsSet[key][Math.floor(Math.random() * wordsSet[key].length)])
// }


function getRandomWord(obj) {
    let result = [];
	for (let key in obj) {
		result.push(obj[key][Math.floor(Math.random() * obj[key].length)])
	}
    return result.join(" ")
}

console.log(getRandomWord(wordsSet))


// 💖BEST PRACTICE💖




