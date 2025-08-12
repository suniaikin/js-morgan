// 🎃DESCRIPTION🎃
/*
output the contents of each key (the word arrays themselves) to the console.

*/


// ✅SOLUTION✅


const wordsSet = {
	bodyParts: ["Face", "Nose", "Hair"],
	adjectives: ["Smelly", "Boring", "Stupid"],
	words: ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
};

for(let key in wordsSet) {
	console.log(wordsSet[key])
}

// 💖BEST PRACTICE💖

