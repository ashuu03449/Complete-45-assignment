"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Start program from Exercise 16
//create a Guest List Array
let guestLiist = ["Ayesha", "Usman", "Fareeha", "Hafsa"];
// Making variable for those guest who cant come
let dontComee = guestLiist[0];
//Print the name of guest who cant come
console.log(dontComee, "not come in dinner");
//Add or remove Values from guest list array
guestLiist.splice(0, 1, "Sir Ameen");
//Message Print for Bigger Table
console.log("Good News ! We have found a Bigger Table for dinner");
//Adding a new guest at starting index of array
guestLiist.unshift("Zunaira");
//Adding a new guest at ending index of array
guestLiist.push("Mariyum");
//Making a variable for storing a middle Index of our guest list array
let middleIndex = Math.floor(guestLiist.length / 2);
//Adding a new value at middle index of array
guestLiist.splice(middleIndex, 0, "Emaan");
//Print Message of Updated List
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with their names
guestLiist.forEach(oneGuest => console.log(`Hello ${oneGuest}, you would like to dinner with me`));
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");
// USING WHILE LOOP TO REMOVE GUEST FROM THE ARRAY UNTIL ONLY TWO NAMES REMAIN
while (guestLiist.length > 2) {
    let removeGuest = guestLiist.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}
//Sending a Invitation  to the last two guest in the list
console.log("Invitations to the last 2 Guests");
guestLiist.forEach(lasttwo => console.log(`Lucky Guest ${lasttwo}, you are still invited to dinner `));
//Removing last two Guest from the list
guestLiist.pop();
guestLiist.pop();
console.log("Empty List :", guestLiist);
