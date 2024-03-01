"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Making a Array of Countries and print its Original Order
let countriesToVisit = ["Dubai", "Australia", "China", "Paris"];
console.log("Original Order :", countriesToVisit);
//Print the array in Alphabetical Order without modifying the actual Array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());
//Show that your array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);
//Print the array in Reverse Order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());
//Show that your array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);
//We have Change the original array Order Now
console.log("Original Array Reverse:", countriesToVisit.reverse());
// print the array to show that it's back to Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//We have Change again the original Array order NOW in reverse order again
console.log("Original Array Reverse Again", countriesToVisit.reverse());
