//  .indexOf(element)

/* <indexOf> is like the reverse of using square brackets to get a value at a particular index;
<colors[2]> is "blue", so <colors.indexOf("blue")> is 2 */

let colors = ["red", "green", "blue"];

let takeGreen = colors.indexOf("green");
console.log(takeGreen); // 1

let takeBlue = colors.indexOf("blue");
console.log(takeBlue); // 2

let colorIndex = colors[0];
console.log(colorIndex); // red

// If the element whose position you ask for is not in the array, JavaScript returns -1.
console.log(colors.indexOf("pink")); // -1

// If the element appears more than once in the array, the indexOf will return the first index of that element in the array
let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
let indexOfBee = insects.indexOf("Bee");
console.log(indexOfBee); // 0



