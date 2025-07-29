/*
// seconds in an hour
let secondInAMinute = 60
let minutesInAnHour = 60
let secondsInAHour = secondInAMinute*minutesInAnHour
console.log(secondsInAHour)

// seconds in a day
let hoursInADay = 24
let secondsInADay = secondsInAHour*hoursInADay
console.log(secondsInADay)

// seconds in a year
let daysInAYear = 365
let secondsInAYear = secondsInADay*daysInAYear
console.log(secondsInAYear)

// age in seconds
let age = 35
let ageInSeconds = age*secondsInAYear
console.log(ageInSeconds)
*/
// Incrementing And Decrementing //
let highFives = 0
++highFives
console.log(highFives)
++highFives
console.log(highFives)
--highFives
console.log(highFives)


let x = 10
x = x + 5
console.log(x)
x += 5
console.log(x)
x -=5
console.log(x)
let balloons = 100
balloons *= 4
console.log(balloons)

// Strings
let myAwesomeString = "Hello World";
myAwesomeString = 5
console.log(myAwesomeString);
let numberNine = 9
let stringNine = "9"
let sum = numberNine + stringNine;
console.log(sum);
let greeting = "Hello "
let myNickname = "Nick"
console.log(greeting + myNickname)

//Finding the Length of a String
let stringLength = "Supercalifragilisticexpialidocious"
console.log(stringLength.length); // 34
let javascript = "java" + "script";
console.log(javascript.length); // 10

// Getting a Single Character from a String
let myName = "Andrew Rivers"
console.log(myName[0]); // A
console.log(myName[1]); // n
console.log(myName[2]); // d


// Cutting Up Strings
let longString = "My long string is long";
let slicedWords = longString.slice(3, 14)
console.log(slicedWords); // long string

let slicedWord = longString.slice(3)
console.log(slicedWord); // long string is long

// Changing Strings to All Capital
let initialString = "Hello there, how are you doing?"
let upperCase = initialString.toUpperCase()
console.log(upperCase) // HELLO THERE, HOW ARE YOU DOING?

initialString = "hELlo THERE, hOW ARE yOu doINg?"
let lowerCase = initialString.toLowerCase()
console.log(lowerCase) // hello there, how are you doing?

// TASK: how to turn the firstLowerCase into firstUpperCase ==//
let sillyString = "hELlo THERE, hOW ARE yOu doINg?"
let firstLetter = sillyString[0].toUpperCase();
console.log(firstLetter)
let restLetters = sillyString.slice(1).toLowerCase()
console.log(restLetters)
let result = firstLetter + restLetters;
console.log(result);








