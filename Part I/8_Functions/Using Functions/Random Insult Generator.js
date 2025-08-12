/*let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Pick a random word from the randomWords array:
let randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
console.log(randomString);*/

// Creating a function of a random word

function getRandomInt(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Creating a sentence from random words

/*let string = `Your ${getRandomInt(randomBodyParts)} is like a ${getRandomInt(randomAdjectives)} ${getRandomInt(randomWords)}`;
console.log(string)*/

// Creating a big insult

const wordsSet = {
	bodyParts: ["Face", "Nose", "Hair"],
	adjectives: ["Smelly", "Boring", "Stupid"],
	words: ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
}


function getRandomSentence(obj) {
	let sentenceParts = [];

	for (let key in obj) {
		let arr = obj[key]; // words array
		let randomWord = arr[Math.floor(Math.random() * arr.length)];
		sentenceParts.push(randomWord); // add to sentence
	}

	return sentenceParts.join(" "); // join with space
}
m,
console.log(getRandomSentence(wordsSet));
