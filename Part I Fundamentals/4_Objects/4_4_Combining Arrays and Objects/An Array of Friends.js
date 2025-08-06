let anna = {
	name: "Anna",
	age: 11,
	luckyNumbers: [2, 4, 8, 16]
};
let dave = {
	name: "Dave",
	age: 5,
	luckyNumbers: [3, 9, 40]
};
let kate = {
	name: "Kate",
	age: 9,
	luckyNumbers: [1, 2, 3]
};

let friends = [anna, dave, kate];

let friend1 = friends[1];
console.log(friend1)

let friend2Name = friends[2].name;
console.log(friend2Name)

let friend1LuckyNumber = friends[0].luckyNumbers[1];
console.log(friend1LuckyNumber) // 4
