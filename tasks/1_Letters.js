// 🎃DESCRIPTION🎃
/* How to turn "hELlo THERE, hOW ARE yOu doINg?" into "Hello there, how are you doing?" */

// ✅SOLUTION✅
let sillyString = "hELlo THERE, hOW ARE yOu doINg?"
let firstLetter = sillyString[0].toUpperCase();
console.log(firstLetter)
let restLetters = sillyString.slice(1).toLowerCase()
console.log(restLetters)
let result = firstLetter + restLetters;
console.log(result); // Hello there, how are you doing?

// 💖BEST PRACTICE💖
sillyString = "hELlo THERE, hOW ARE yOu doINg?"
let smartString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
console.log(smartString) // Hello there, how are you doing?

