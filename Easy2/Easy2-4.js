//squaring an object

/*
Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the
square of its argument
(the square is the result of multiplying a number by itself).
*/

// function square(num) {
//   let result = Math.pow(num, 2);
//   return result;
// }
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true