//Arithmetic Integer

/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.
Do not worry about validating the input.
*/
let readline = require('readline-sync');

console.log('Please enter the first positive integer.');
let num1 = Number(readline.question());

console.log('Please enter the second positive integer.');
let num2 = Number(readline.question());


function performOperation(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(4)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

performOperation(num1, num2);
