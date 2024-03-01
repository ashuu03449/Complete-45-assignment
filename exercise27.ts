// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Version 1 alien color is green
console.log("1st Version alien color is green")
let alienColor: string = "green";
if (alienColor === "green")
{
    console.log("Congratulations! you Just earned 5 points.");
} else if (alienColor === "yellow")
{
    console.log("Congratulations! you Just earned 10 points.");
} else if (alienColor === "red")
{
    console.log("Congratulations! you Just earned 15 points.");
} else{
    console.log("Unknown Alien color");
}

//Version 02 alien color is yellow
console.log("2nd Version alien color is yellow")
alienColor = "yellow";

if(alienColor === "green") {
    console.log("Congratulations! you Just earned 5 points.");
} else if(alienColor === "yellow") {
    console.log("Congratulations! you Just earned 10 points.");
} else if(alienColor === "red") {
    console.log("Congratulations! you Just earned 15 points.");
} else {
    console.log("Unknow alien color")
}

//3rd Version alien color is red
console.log("3rd version alien color is red")
alienColor = "red";

if (alienColor === "green") {
    console.log("Congratulations! you Just earned 5 points.");
} else if(alienColor === "yellow") {
    console.log("Congratulations! you Just earned 10 points.");
} else if(alienColor === "red") {
    console.log("Congratulations! you Just earned 15 points.");
} else {
    console.log("Unknow alien color")
}