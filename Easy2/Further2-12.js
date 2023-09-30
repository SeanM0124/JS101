//Always return Negative

/*
Write a function that takes a number as an argument.
If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.
*/

// function negative(number) {
//   if (number > 0) {
//     return number * -1;
//   } else {
//     return number;
//   }
// }

// function negative(number) {
//   return Math.abs(number) * -1;
// }

function negative(number) {
  return number > 0 ? number * -1 : number;
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0