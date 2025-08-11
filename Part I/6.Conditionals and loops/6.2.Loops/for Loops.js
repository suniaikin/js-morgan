/*
for loops make it easier to write loops that create a variable, loop
until a condition is true, and update the variable at the end of
each turn around the loop.
 */

for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
	console.log(`I have counted ${sheepCounted} sheep!`)
} console.log("Zzzzzzz")


let timesToSayHello = 3
for (let i = 0; i < timesToSayHello; i++) {
	console.log("Hello")
}

// Using for Loops with Arrays and Strings
/*One very common use of for loops is to do something with every element in an array or every character in a string */

let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for(let i = 0; i < animals.length; i++) {
	console.log(`There is ${animals[i]} in zoo.`)
}

let name = "Andrew"
for(let i=0; i<name.length; i++) {
	console.log(`My name is spelling as ${name[i]}`)
}

for (let x = 2; x < 10000; x = x * 2) {
	console.log(x)
}