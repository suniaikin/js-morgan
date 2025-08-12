// 🎃DESCRIPTION🎃
/* output all keys of the wordsSet object to the console. */

// ✅SOLUTION✅

const wordsSet = {
	bodyParts: ["Face", "Nose", "Hair"],
	adjectives: ["Smelly", "Boring", "Stupid"],
	words: ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
};

for(let key in wordsSet) {
	console.log(key);
}

// 💖BEST PRACTICE💖

