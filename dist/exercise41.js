"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Array of magicians names
const magicianNames = ["Derren Brown", "David Blaine", "Harry Houdini", "Criss Angel", "David Copperfield"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Call the function to show the magician's names
show_magicians(magicianNames);
