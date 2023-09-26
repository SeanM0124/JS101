//Stringy Strings

/*
Write a function that takes one argument, a positive integer,
and returns a string of alternating '1's and '0's,
always starting with a '1'.
The length of the string should match the given integer.
*/

// function stringy(integer) {
//   let string = '1';
//   while (string.length > integer) {
//     if (string[i] % 2 === 0) {
//       string += '0';
//     } else {
//       string += '1';
//     }
//   }
// }
function stringy(integer) {
  let string = '';
  for (let index = 0; index < integer; index++) {
    if (index % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }
  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(8);
stringy(10);