// Get middle character

/*
Write a function that takes a non-empty string argument
and returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly two characters.
*/

function centerOf(string) {
  if (string.length % 2 === 1) {
    let center = (string.length - 1) / 2;
    return string[center];
  } else {
    let start = (string.length / 2) - 1;
    return string.slice(start, start + 2);
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"