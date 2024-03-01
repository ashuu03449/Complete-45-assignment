"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//Define the Array of favorite fruits
const favoriteFruits = ["apple", "mango", "orange"];
// syntax: arrayName.include("element")
//Check for specific fruits using independent if statements
if (favoriteFruits.includes("apple")) {
    console.log("I like apples!");
}
if (favoriteFruits.includes("mango")) {
    console.log("I enjoy mango!");
}
if (favoriteFruits.includes("orange")) {
    console.log("Oranges is my favorite fruit!");
}
if (favoriteFruits.includes("grape")) {
    console.log("Grapes are tasty!");
}
if (favoriteFruits.includes("banana")) {
    console.log("Bananas are delicious!");
}
