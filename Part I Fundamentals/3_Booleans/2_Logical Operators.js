// the three main Boolean operators in JavaScript are &&, ||, and !. T

// &&
let hadShower = true
let hadBackpack = true
let isReadyForSchool = hadShower && hadBackpack
console.log(isReadyForSchool === true) //true
hadShower = true
hadBackpack = false
isReadyForSchool = hadShower && hadBackpack
console.log(isReadyForSchool === true) //false

// ||
hadShower = true
hadBackpack = true
let hasApple = true
let hasOrange = false
let isReadyToGoWithLunch = (hadShower && hadBackpack) && (hasApple || hasOrange)
console.log(isReadyToGoWithLunch) // true

// ! (not)
let isWeekend = true
let needToShowerToday = !isWeekend
console.log(needToShowerToday) // false


// Combining Logical Operators
isWeekend = false
hadShower = true
hasApple = true
hasOrange = true
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange)
console.log(shouldGoToSchool) // true