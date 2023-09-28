//Sum or Product of Consecutive Integers

//Write a program that asks the user to enter an integer greater than 0,
//then asks whether the user wants
//to determine the sum or the product of all numbers
//between 1 and the entered integer, inclusive.

const readline = require('readline-sync');

function getSum(reducedArray) {
  let numStart = 0;
  for (let num = 1; num <= reducedArray; num++) {
    numStart += num;
  }
  return numStart;
}

function getProduct(reducedArray) {
  let numStart = 1;
  for (let num = 1; num <= reducedArray; num++) {
    numStart *= num;
  }
  return numStart;
}

function invalidNum(num) {
  let isNaN = Number.isNaN(Number(num));
  let isEmpty = num.trim() === '';
  let isZero = Math.abs(Number(num)) === 0;

  return isNaN || isEmpty || isZero;
}

function getIntFromUser() {
  console.log('Please enter an integer greater than 0');
  let int = readline.question();

  while (invalidNum(int)) {
    console.log('That is not a valid input, please try again.');
    int = readline.question();
    return int;
  }
  return int;
}

function getSumOrProduct() {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = (readline.question()).toLowerCase();

  while (!['s', 'p'].includes(operation)) {
    console.log('Please enter either "s" or "p".');
    operation = (readline.question()).toLowerCase();
  }
  return operation;
}

function performOperation(int, operation) {
  if (operation === 's') {
    let sum = getSum(int);
    console.log(`The sum of all numbers between 1 and ${int} is ${sum}.`);
  } else if (operation === 'p') {
    let product = getProduct(int);
    console.log(`The sum of all numbers between 1 and ${int} is ${product}.`);
  }
}

function howManyIntegers() {
  console.log('How many numbers would you like to enter?');
  let howMany = readline.question();

  while (invalidNum(howMany)) {
    console.log('Please enter a valid number.');
    howMany = readline.question();
  }
  return howMany;
}

function makeTheArray(howMuchLength) {
  let intArray = [];
  while (intArray.length < howMuchLength) {
    let int = getIntFromUser();
    intArray.push(Number(int));
  }
  return intArray;
}

function reduceTheArray(arrayOfIntegers) {
  return arrayOfIntegers.reduce((accumulator, currentValue) =>
    accumulator + currentValue);
}


let howMuchLength = howManyIntegers();

let arrayOfIntegers = makeTheArray(howMuchLength);
let reducedArray = reduceTheArray(arrayOfIntegers);
let operation = getSumOrProduct();

performOperation(reducedArray, operation);

console.log('Thank you, come again!');