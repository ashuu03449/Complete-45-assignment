"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
//Array of magicians names
var magicianNames = ["Derren Brown", "David Blaine", "Harry Houdini", "Criss Angel", "David Copperfield"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
//Modify the array to add "the Great" to each magician's name
var greatMagicianNames = make_great(magicianNames);
// Call the function to show the original magician's names
console.log("Original Magicians:");
show_magicians(magicianNames);
// call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
