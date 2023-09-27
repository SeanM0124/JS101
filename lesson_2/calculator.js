const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');


function messages(message, lang = "begin") {
  return MESSAGES[lang][message];
}

function prompt(key, language, result = '') {
  let message = messages(key, language);
  console.log(`=> ${message} ${result}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getAndCheckFirstNumb(language) {
  prompt('firstNumb', language);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumb', language);
    number1 = readline.question();
  }
  return number1;
}

function getAndCheckSecondNumb(language) {
  prompt("secondNumb", language);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumb', language);
    number2 = readline.question();
  }
  return number2;
}

function getAndCheckOperation(language) {
  prompt('operation', language);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOp', language);
    operation = readline.question();
  }
  return operation;
}

function invalidAnswer(string) {
  return string.trimStart() === '' || (!['yes', 'no', 'n', 'y'].includes(string));
}

function getAndCheckValidAnswer(language) {
  prompt('again', language);
  let answer = readline.question();

  while (invalidAnswer(answer)) {
    prompt('invalidAns', language);
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

function printFinalResult(result, isThereDivideByZero, language) {
  if (isThereDivideByZero === false) {
    prompt("output", language, result);
    printLines();
  } else {
    prompt('cannotDivideByZero', language);
    printLines();
  }
}

function clearScreen() {
  console.clear();
}

function printLines() {
  console.log('------------------------------');
}

function pickAndValidateLanguage() {
  prompt('chooseYourLanguage');
  let language = readline.question().toLowerCase();

  while (invalidLanguage(language)) {
    language = validLanguage();
  }
  return language;
}

function invalidLanguage(string) {
  return !['en', 'es', 'fr', 'de'].includes(string.toLowerCase());
}

function validLanguage() {
  prompt('langError');
  return readline.question().toLowerCase();
}


function runProgram() {
  clearScreen();
  let language = pickAndValidateLanguage();
  prompt('welcome', language);
  printLines();

  while (true) {
    let number1 = getAndCheckFirstNumb(language);
    let number2 = getAndCheckSecondNumb(language);
    let operation = getAndCheckOperation(language);

    let isThereDivideByZero = dividingByZero(number2, operation);
    let result = getResult(number1, number2, operation);

    printFinalResult(result, isThereDivideByZero, language);

    let answer = (getAndCheckValidAnswer(language).toLowerCase());

    if (!['y', 'yes'].includes(answer)) break;
    prompt('goobye', language);
    clearScreen();
  }
}

runProgram();
