const wordsSet = {
	bodyParts: ["Face", "Nose", "Hair"],
	adjectives: ["Smelly", "Boring", "Stupid"],
	words: ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
}

function getRandomWords(obj) {
	let result = [];
	for (let key in obj) {
		result.push(obj[key][Math.floor(Math.random() * obj[key].length)]);
	}
	return result;
}


console.log(getRandomWords(wordsSet));
