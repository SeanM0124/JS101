/*
Using the following string, create a new string that contains
all lowercase letters except for the first character, which should
be capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let firstLetter = munstersDescription.charAt(0).toUpperCase();
let stringMajority = munstersDescription.substring(1).toLowerCase();
let newMunsterDescription = firstLetter + stringMajority;
console.log(newMunsterDescription);

//munstersDescription.charAt(0).toUpperCase() +
//munstersDescription.substring(1).toLowerCase();