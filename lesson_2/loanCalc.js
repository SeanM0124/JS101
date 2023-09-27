const readline = require('readline-sync');
const MESSAGES = require('./loan_calc_messages.json');
const TRIALS_ALLOWED = 3;


function prompt(message) { //messages using .json - monthly payment gives undefined w/o
  if (Object.keys(MESSAGES).includes(message)) {
    console.log(`\n=> ${MESSAGES[message]}`);
  } else {
    console.log(`=> ${message}`); //no new lines on creative ones
  }
}

function invalidNum(num) {
  let isNaN = Number.isNaN(Number(num));
  let isNegativeOrZero = Number(num) <= 0;
  let isEmpty = num.trim() === '';

  return isNaN || isNegativeOrZero || isEmpty;
}

function getAprAndValidate() {
  prompt('howMuchApr'); //get apr and validate
  let apr = readline.question();
  while (invalidNum(apr)) {
    prompt('invalidNum');
    apr = readline.question();
  }
  return apr;
}

function getYearsAndValidate() {
  prompt('howLong'); //get length of loan and validate
  let years = readline.question();
  while (invalidNum(years)) {
    prompt('invalidNum');
    years = readline.question();
  }
  if (years > 122) { //122 years is longest living human ever
    console.log('I see it is a generational loan.');
  }
  return years;
}

function getLoanAmountAndValidate() {
  prompt('howMuchLoan'); // get loan ammount and validate
  let loanAmount = readline.question();
  while (invalidNum(loanAmount)) {
    prompt('invalidNum');
    loanAmount = readline.question();
  }
  return loanAmount;
}

function getAndValidateAgain(trialsDone) {
  prompt('another');
  console.log('=> (Calculations remaining in your free trial: ' + (TRIALS_ALLOWED - trialsDone) + ')');
  let answer = readline.question();

  while (!['yes', 'n', 'no', 'y'].includes(answer)) {
    prompt('invalidAns');
    answer = readline.question();
  }
  return answer.toLowerCase();
}

function clearScreen() {
  console.clear();
}

// function trialsCounter(trialsDone) {
//   trialsDone++;
//   return trialsDone;
// }

function calculateAndDisplayResult(loanAmount, apr, years) {
  let monthRate = (Number(apr) / 100) / 12;

  let months = Number(years) * 12;

  let monthPay = Number(loanAmount) *
             (monthRate / (1 - Math.pow((1 + monthRate), (-Number(months)))));
  prompt(`Your monthly payment is: $${monthPay.toFixed(2)}`);

}

function breakLines() {
  prompt('lines'); //give structure to program
}

clearScreen();
prompt('welcome');

while (true) { //program loop
  breakLines();

  let trialsDone = 0;
  while (trialsDone < TRIALS_ALLOWED) {
    trialsDone++;

    let loanAmount = getLoanAmountAndValidate();
    let apr = getAprAndValidate();
    let years = getYearsAndValidate();

    calculateAndDisplayResult(loanAmount, apr, years);

    breakLines();

    if (trialsDone === TRIALS_ALLOWED) {
      prompt('Sorry, it would appear your free trial is over.');
      prompt('goodbye');
      return false;
    }

    let answer = getAndValidateAgain(trialsDone);
    if (answer[0] === 'n') {
      console.clear();
      prompt('goodbye');
      return false;
    }
    clearScreen();
    prompt('Alright here we go! ');
  }
}