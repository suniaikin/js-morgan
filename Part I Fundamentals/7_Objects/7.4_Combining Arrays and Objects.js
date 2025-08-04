let dinosaurs = [
	{
		name: "Tyrannosaurus Rex",
		period: "Late Cretaceous"
	},
	{
		name: "Stegosaurus",
		period: "Late Jurassic"
	},
	{
		name: "Plateosaurus",
		period: "Triassic"
	}
]

let firstElement = dinosaurs[0]
console.log(firstElement) // { name: 'Tyrannosaurus Rex', period: 'Late Cretaceous' }
let getOnlyName = dinosaurs[0].name // Tyrannosaurus Rex
let getOnlyName2 = dinosaurs[0]["name"]
console.log(getOnlyName) // Tyrannosaurus Rex
console.log(getOnlyName2) // Tyrannosaurus Rex
