// confirm() Function

// The confirm function is a way to take user input without a text box by asking for a yes or no (Boolean) answer.

const likesCats = confirm("Do you like cats?");
if (likesCats) {
	console.log("You're a cool cat!");
} else {
	console.log("Yeah, that's fine. You're still cool!");
}