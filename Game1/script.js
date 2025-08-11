let words = ["javascript", "python", "java", "hangman", "programming"];
console.log(words);
let hiddenWord = [] // new Array for hidden letters
console.log(hiddenWord);

let randomWord = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < randomWord.length; i++) {
	hiddenWord[i] = "_";
}
console.log(hiddenWord);