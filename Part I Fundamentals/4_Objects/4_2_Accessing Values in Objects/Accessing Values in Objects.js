/* You can access values in objects using square brackets, just like with arrays. The only difference is that instead of the index (a
number), you use the key (a string).*/

const cat = {
	"legs": 3,
	"name": "Harmony",
	"color": "Tortoiseshell"
}
const accessObjectValue = cat["name"]
//or
const accessObjectValueWithoutQuotes = cat.name // This style is called dot notation (no space)
// Display:
console.log(accessObjectValue) // "Harmony"
console.log(accessObjectValueWithoutQuotes) // "Harmony"

// List of all the keys in an object
const allKeys = Object.keys(cat);
// Display:
console.log(allKeys) // [ 'legs', 'name', 'color' ] -  returns an array

