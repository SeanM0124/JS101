//The End is Near but not here

/*
Write a function that returns the middle word of a phrase or sentence.
It should handle all of the edge cases you thought of.
*/
/*
input string

find middle of string
 length, split by spaces

edge cases:
one word
even amount of words
empty

output middle word

*/
const readline = require('readline-sync');

function isInvalidString(string) {
  let isEmpty = string.trim() === '';

  return isEmpty;
}

function createWordArray(string) {
  let wordArray = string.split(' ');
  return wordArray;
}

function getAndValidateString() {
  console.log('Please enter a string to find its middle word.');
  let string = readline.question();

  while (isInvalidString(string)) {
    console.log('That is not a valid string, please enter another.');
    string = readline.question();
  }
  return string;
}

function getMiddleWord(stringArray) {
  if (stringArray.length === 1) { //returns single word if one word entered
    return String(stringArray[0]);
  } else if (stringArray.length % 2 === 1) { //return the single middle two words
    let center = ((stringArray.length - 1) / 2);
    return String(stringArray[center]);
  } else { //return the middle two words
    let leftCenter = ((stringArray.length / 2) - 1);
    let rightCenter = ((stringArray.length / 2));
    return String(stringArray[leftCenter]) + ' ' + String(stringArray[rightCenter]);
  }
}

function runProgram() {
  let string = getAndValidateString();
  let wordArray = createWordArray(string);

  let result = getMiddleWord(wordArray);

  console.log(`The middle word of:\n${string}\n is: ${result}`);
}

runProgram();
