// 🎃DESCRIPTION🎃
/*
let myCrazyObject = {
	"name": "A ridiculous object",
	"some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
	"random animal": "Banana Shark"
}
How would you get the number 123 out of this object
using one line of JavaScript? Try it out in the console to see
if you’re right.
 */

// ✅SOLUTION✅

let myCrazyObject = {
	"name": "A ridiculous object",
	"some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
	"random animal": "Banana Shark"
}

let theNumber = myCrazyObject["some array"][2]["number"]
console.log(theNumber) // 123

// 💖BEST PRACTICE💖

