//Sum or Product of Consecutive Integers

//Write a program that asks the user to enter an integer greater than 0,
//then asks whether the user wants
//to determine the sum or the product of all numbers
//between 1 and the entered integer, inclusive.

const readline = require('readline-sync');

function getSum(numberFinal) {
  let numStart = 0;
  for (let num = 1; num <= numberFinal; num++) {
    numStart += num;
  }
  return numStart;
}

function getProduct(numberFinal) {
  let numStart = 1;
  for (let num = 1; num <= numberFinal; num++) {
    numStart *= num;
  }
  return numStart;
}

console.log('Please enter an integer greater than 0');
let int = Number(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = (readline.question()).toLowerCase();

while (!['s', 'p'].includes(operation)) {
  console.log('Please enter either "s" or "p".');
  operation = (readline.question()).toLowerCase();
}

if (operation === 's') {
  let sum = getSum(int);
  console.log(`The sum of all numbers between 1 and ${int} is ${sum}.`);
} else if (operation === 'p') {
  let product = getProduct(int);
  console.log(`The sum of all numbers between 1 and ${int} is ${product}.`);
}

console.log('Thank you, come again!');