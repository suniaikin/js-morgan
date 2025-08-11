let randomBodyParts = ["Face", "Nose", "Hair"];
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
console.log(randomString);

// Creating a function