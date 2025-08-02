// Using Math.random()
let random = Math.random()
console.log(random)

random = Math.random()*10
console.log(random)

// Rounding Down with Math.floor()
let roudedRandom = Math.floor(random)
console.log(roudedRandom)

let randomIndex = Math.floor(Math.random() * 4);
console.log(randomIndex)

// Random Element from the array
let array = ["Rock", "Paper", "Scissors"]
let randomChoice = array[Math.floor(Math.random()*array.length)]
console.log(randomChoice)