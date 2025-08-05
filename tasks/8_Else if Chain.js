/* Write a program with a name variable. If name is your name,
print out Hello me!; otherwise, print Hello stranger!. (Hint:
Use === to compare name to your name.)
Next, rewrite the program so it’ll say hi to your dad if
name is set to your dad’s name or hi to your mom if name is
your mom’s name. If it’s neither of them, say Hello stranger!
as before.
*/

const name = "Victor"
if (name === "Andrei") {
	console.log("Hello me!");
} else if (name === "Victor") {
	console.log("Hello dad!");
} else {
	console.log("Hello stranger!");
}