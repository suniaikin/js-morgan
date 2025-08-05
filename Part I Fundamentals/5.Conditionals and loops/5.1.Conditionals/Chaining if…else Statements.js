let lemonChicken = false;
let beefWithBlackBean = true;
let sweetAndSourPork = true;
if (lemonChicken) {
	console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
	console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
	console.log("OK, I'll have the pork.");
} else {
	console.log("Well, I guess I'll have rice then.");
}

/*
You can read this as follows:
1. If the first condition is true, execute the first body.
2. Otherwise, if the second condition is true, execute the second body.
3. Otherwise, if the third condition is true, execute the third body.
4. If none of the conditions is true, the else body is run.

There’s one other thing to note: you don’t necessarily have to
include the final else. If you don’t, though, and none of the conditions
is true, then nothing inside the if...else chain will be executed
*/