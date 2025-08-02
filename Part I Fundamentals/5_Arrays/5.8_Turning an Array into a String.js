// .join()

let animals = ["Monkey", "Cat", "Fish", "Lizard"];
let unitedAnimals = animals.join();
console.log(unitedAnimals) // "Monkey,Cat,Fish,Lizard"

/* When you call the <.join()> method on an array,
it returns a string containing all the elements, separated by commas. */

// .join([symbol])
let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];

let hyphenSeparator = boringAnimals.join(" - ");
console.log(hyphenSeparator) // Monkey - Cat - Fish - Lizard

let asterixSeparator = boringAnimals.join(" * ");
console.log(asterixSeparator) // Monkey * Cat * Fish * Lizard

let noSeparator = boringAnimals.join("")
console.log(noSeparator) // MonkeyCatFishLizard

letspaceSeparator = boringAnimals.join(" ")
console.log(letspaceSeparator) // Monkey Cat Fish Lizard


