let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

let jointSentence = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`
console.log(jointSentence)