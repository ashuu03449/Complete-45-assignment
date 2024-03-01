// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//create a Guest List Array
let guestLiist = ["Ayesha","Usman","Fareeha","Hafsa"];

// Making variable for those guest who cant come
let dontComee = guestLiist[0];

//Print the name of guest who cant come
console.log(dontComee,"not come in dinner");

//Add or remove Values from guest list array
guestLiist.splice(0,1,"Sir Ameen");

//Message Print for Bigger Table
console.log("Good News ! We have found a Bigger Table for dinner");

//Adding a new guest at starting index of array
guestLiist.unshift("Zunaira");

//Adding a new guest at ending index of array
guestLiist.push("Mariyum");

//Making a variable for storing a middle Index of our guest list array
let middleIndex:number = Math.floor(guestLiist.length / 2);

//Adding a new value at middle index of array
guestLiist.splice(middleIndex, 0, "Emaan");

//Print Message of Updated List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one by one with their names
guestLiist.forEach(oneGuest => console.log(`Hello ${oneGuest}, you would like to dinner with me`));





