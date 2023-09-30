//How old is Teddy?

/*
The randomBetween function used the Math.floor() method.
Would it make a difference if the Math.round() method was used instead?

Also, how can we make the function more robust? What if the user
inadvertently gave the inputs in reverse order
(i.e., the value passed to min was greater than max)?
*/
//Math.round rounds to nearest integer. This will not greatly chagne the program
//however, only altering the outome by 1 number.
//logically i think .floor is more accurate to real life
//if you are 24 and 11 months, you are still 24.

const readline = require('readline-sync');

function getTeddyAge(min, max) {
  return (Math.round((Math.random()) * (((max - min ) + 1) + min)));
}

function invalidNum(num) {
  let isEmpty = num.trim() === '';
  let isNaN = Number.isNaN(Number(num));
  let isNegative = Number(num) < 0;

  return isEmpty || isNaN || isNegative;
}

function getMax() {
  console.log('Please select a maximum.');
  let max = readline.question();

  while (invalidNum(max)) {
    console.log('That is not a valid max, please enter another');
    max = readline.question();
  }
  return max;
}

function getMin(max) {
  console.log('Please select a minimum');
  let min = readline.question();

  while (invalidNum(min) || min > max) {
    console.log('That is not a valid minimum, please enter another.');
    min = readline.question();
  }
  return min;
}


let max = Number(getMax());
let min = Number(getMin(max));

console.log(getTeddyAge(min, max));