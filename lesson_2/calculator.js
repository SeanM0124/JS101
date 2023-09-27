const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';


function messages(message, language) {
  return MESSAGES[language][message];
}

function prompt(key, result = '') {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message} ${result}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getAndCheckFirstNumb() {
  prompt('firstNumb');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumb');
    number1 = readline.question();
  }
  return number1;
}

function getAndCheckSecondNumb() {
  prompt("secondNumb");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumb');
    number2 = readline.question();
  }
  return number2;
}

function getAndCheckOperation() {
  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOp');
    operation = readline.question();
  }
  return operation;
}

function invalidAnswer(string) {
  return string.trimStart() === '' || (!['yes', 'no', 'n', 'y'].includes(string));
}

function getAndCheckValidAnswer() {
  prompt('again');
  let answer = readline.question();

  while (invalidAnswer(answer)) {
    prompt('invalidAns');
    answer = readline.question();
  }
  return answer;
}

function getResult(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;

  }
  return output;
}

function dividingByZero(number2, operation) {
  let isThereZero = false;
  if ((Math.abs(number2) === 0) && (operation === '4')) {
    isThereZero = true;
    return isThereZero;
  }
  return isThereZero;
}

function printFinalResult(result, isThereDivideByZero) {
  if (isThereDivideByZero === false) {
    prompt("output", result);
  } else {
    prompt('cannotDivideByZero');
  }
}

function clearScreen() {
  console.clear();
}

function printLines() {
  console.log('------------------------------');
}

clearScreen();
prompt('welcome');
printLines();

while (true) {
  let number1 = getAndCheckFirstNumb();
  let number2 = getAndCheckSecondNumb();
  let operation = getAndCheckOperation();

  let isThereDivideByZero = dividingByZero(number2, operation);
  let result = getResult(number1, number2, operation);

  printFinalResult(result, isThereDivideByZero);

  printLines();

  let answer = (getAndCheckValidAnswer().toLowerCase());

  if (!['y', 'yes'].includes(answer)) break;
  clearScreen();
}
