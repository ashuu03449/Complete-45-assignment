/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true

// Test Using the lower case function
const text1: string = "Hello World";
const text2: string = "hello world";

console.log(text1.toLowerCase() === text2); //true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false

// Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); //both condition are true
console.log(x < y || y > z); //true, at least one condition is true
console.log(x > y && y < z); //both condition are false

// Test whether an item is in a array
const fruits: string[] = ["mango", "apple", "grape", "orange"];

console.log(fruits.includes("mango")); //true
console.log(fruits.includes("banana")); //false

// Test whether an item is not in an array
const color: string[] = ["blue","purple","red","yellow"];

console.log(!color.includes("yellow"));//false
console.log(!color.includes("green"));//true