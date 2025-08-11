// array].pop()
// array].shift()

let animals = ["Polar Bear", "Monkey", "Cat",
"Dog", "Llama"]

let lastAnimal = animals.pop()
// "Llama", is returned and saved in the variable lastAnimal.//
// "Llama" is also removed from the array, which leaves us with four
// animals.

console.log(lastAnimal) // Llama
console.log(animals) //[ 'Polar Bear', 'Monkey', 'Cat', 'Dog' ]

lastAnimal = animals.pop()
console.log(lastAnimal) // Dog
console.log(animals) // [ 'Polar Bear', 'Monkey', 'Cat' ]

animals.unshift(lastAnimal)
console.log(animals)  // [ 'Dog', 'Polar Bear', 'Monkey', 'Cat' ]

animals.shift()
console.log(animals) // [ 'Polar Bear', 'Monkey', 'Cat' ]


