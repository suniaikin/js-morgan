// Random String Generator

// 🎃DESCRIPTION🎃
/*Make a random string generator. You’ll need to start with a
string containing all the letters in the alphabet:*/

// ✅SOLUTION✅

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = ""

while (randomString.length < 6) {
	let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	randomString += randomLetter
} 	console.log(randomString)

// 💖BEST PRACTICE💖

