let munstersDescription = "The Munsters are creepy and spooky.";
/*
1. take a string and determine if its upper or lower case at each char
2. if uppercase, make lower case, else make it upper case
*/
let newString = munstersDescription.split('')
  .map(char =>
    (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
  .join('');

console.log(newString);