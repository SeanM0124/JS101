const readline = require('readline-sync');
const MESSAGES = require('./loan_calc_messages.json');
let counter = 0;
function prompt(message) { //messages using .json - monthly payment gives undefined w/o
  if (Object.keys(MESSAGES).includes(message)) {
    console.log(`\n=> ${MESSAGES[message]}`);
  } else {
    console.log(`=> ${message}`); //no new lines on creative ones
  }
}

//----- after using .json, below is no longer valid ------


// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// ----- condensed following functions per solution shown ------


// function isNotNumber(num) {
//   return Number.isNaN(Number(num));
// }

// function isNegative(num) {
//   return Number(num) <= 0;
// }

// function isEmpty(num) {
//   return num.trim() === '';
// }

// function invalidNum(num) {
//   return isEmpty(num) || isNotNumber(num) || isNegative(num);
// }

function invalidNum(num) {
  return Number.isNaN(Number(num)) ||
         Number(num) <= 0 || //<= otherwise can give 0 years for $Infinity a month
         num.trim() === '';
}

prompt('welcome');

while (true) { //program loop
  counter++;
  prompt('lines'); //give structure to program

  prompt('howMuchLoan'); // get loan ammount and validate
  let loanAmount = readline.question();
  while (invalidNum(loanAmount)) {
    prompt('invalidNum');
    loanAmount = readline.question();
  }

  prompt('howMuchApr'); //get apr and validate
  let apr = readline.question();
  while (invalidNum(apr)) {
    prompt('invalidNum');
    apr = readline.question();
  }

  prompt('howLong'); //get length of loan and validate
  let years = readline.question();
  while (invalidNum(years)) {
    prompt('invalidNum');
    years = readline.question();
  }

  //max range edge case? logically calculator cannot impose can it?
  if (years > 122) { //122 years is longest living human ever
    console.log('I see it is a generational loan.');
  }

  let monthRate = (Number(apr) / 100) / 12;

  let months = Number(years) * 12;

  let monthPay = Number(loanAmount) *
             (monthRate / (1 - Math.pow((1 + monthRate), (-Number(months)))));

  prompt('lines');

  prompt(`Your monthly payment is: $${monthPay.toFixed(2)}`);

  prompt('another');
  console.log('=> Calculations remaining in your free trial: ' + (3 - counter));
  let answer = readline.question().toLowerCase();

  //validate answer
  while (!['y', 'n'].includes(answer[0])) { //deceptively allows "nein" etc.
    prompt('invalidAns');
    answer = readline.question();
  }
  if (answer[0] === 'n') {
    console.clear();
    prompt('goodbye');
    break;
  }
  if (counter === 3) {
    console.log('Sorry, it would appear your free trial is over.');
    break;
  }
  console.clear();
  console.log('Alright here we go! ');
}