// [array].concat ([second_array], [third_array])

let  furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"]
let scalyAnimals = ["Boa Constrictor", "Godzilla"]

let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals)
console.log(furryAndScalyAnimals)
/*
[
  'Alpaca',
  'Ring-tailed Lemur',
  'Yeti',
  'Boa Constrictor',
  'Godzilla'
]
*/
let featheredAnimals = ["Macaw", "Dodo"];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals) // multiple arrays concat
/*
[
  'Alpaca',
  'Ring-tailed Lemur',
  'Yeti',
  'Boa Constrictor',
  'Godzilla',
  'Macaw',
  'Dodo'
]
*/

