//Tip Calculator

//Create a simple tip calculator.
//The program should prompt for a bill amount and a tip rate.
//The program must compute the tip,
//and then log both the tip and the total amount of the bill to the console.
//You can ignore input validation and assume that the user will enter numbers.

const readline = require('readline-sync');

console.log('How much was the bill?');
let bill = Number(readline.question());

console.log('What is the tip percentage?');
let tipPercent = Number(readline.question());

function getTotal(bill, tipPercent) {
  let tip = bill * (tipPercent / 100);
  let billTotal = Number(bill + tip);
  console.log(`The tip is $${tip}.`);
  console.log(`The total is $${billTotal}.`);
}

getTotal(bill, tipPercent);