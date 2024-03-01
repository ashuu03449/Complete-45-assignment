/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const make_Shirt = (size: string, message: string): void => 
{
    console.log(`Size: ${size}, Message: "${message}"`);
}

//Call the function

//Call the function with the size and the message variables.
let size: string = "Medium";
let messages: string = "Typescript Insights with Kamran"

make_Shirt(size, messages);

//Directly call the function

make_Shirt("Large","Typesript Insights");