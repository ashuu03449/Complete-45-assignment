"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Array of magicians names
const magicianNames = ["Derren Brown", "David Blaine", "Harry Houdini", "Criss Angel", "David Copperfield"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
//Modify the array to add "the Great" to each magician's name
const greatMagicianNames = make_great(magicianNames);
// Call the function to show the original magician's names
console.log("Original Magicians:");
show_magicians(magicianNames);
// call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
