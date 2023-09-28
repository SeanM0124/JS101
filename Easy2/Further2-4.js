//squaring an arguement

/*
What if we wanted generalize this function to a
"power to the n" type function: cubed, to the 4th power,
to the 5th, etc. How would we go about doing so while still
using the multiply() function?
*/

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function square(number) {
  return multiply(number, number);
}

function toThePower(number, power) {
  let result = 1;
  let count = 0;

  while (count < power) {
    result = multiply(result, number);
    count++;
  }
  return result;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(toThePower(5, 3) === 125); //125
