/*
A while loop repeatedly executes its body until a particular condition stops being true.
By writing a while loop, you are saying, “Keep doing this while this
condition is true. Stop when the condition becomes false.”
 */

// Counting Sheep with a while Loop

let sheepCounted = 0;
while (sheepCounted < 10) {
	console.log(`I have counted ${sheepCounted} sheep!`)
	sheepCounted = sheepCounted + 1;
} console.log("Zzzzzz");

// Preventing Infinite Loops

/*  if the condition you set never becomes false, your loop will loop forever */