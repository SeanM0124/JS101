const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');


function messages(message, language = 'begin') {
  return MESSAGES[language][message];
}

function invalidNumber(number) { //function for valid numbers/whitespace
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}


function checkLanguage() {
  while (!['en', 'es', 'fr', 'de'].includes(language)) {
    prompt(messages('langError'));
    language = readline.question();
  }
  return MESSAGES[language];
}

function chooseLanguage() {
  prompt(messages('chooseLanguage'));
  let language = readline.question();

  while (!checkLanguage(language)) {
    prompt(messages('chooseLanguage'));
    language = readline.question();
  }
  return language;
}

let language = messages(chooseLanguage());
checkLanguage(language);

prompt(messages('welcome', language));

while (true) {
  const language = chooseLanguage();
  prompt(messages('welcome', language));

  prompt(messages('firstNumb', language)); //ask user for first num
  let userNumb1 = readline.question();

  while (invalidNumber(userNumb1)) { // for numb1 validation
    prompt(messages('invalidNumb', language));
    userNumb1 = readline.question();
  }

  prompt(messages('num1', language) + userNumb1 + `.`);

  prompt(messages('secondNumb', language)); //ask user for 2nd num
  let userNumb2 = readline.question();

  while (invalidNumber(userNumb2)) { // for numb2 validation
    prompt(messages('invalidNumb', language));
    userNumb2 = readline.question();
  }

  prompt(messages('num2', language) + userNumb2 + '.');

  prompt(messages('operation', language));
  //Asks user for operation

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) { // operation choice validation
    prompt(messages('invalidOp', language));
    operation = readline.question();
  }

  let output;

  //perform the operation on the two numbers
  switch (operation) {
    case '1':
      output = Number(userNumb1) + Number(userNumb2);
      break;
    case '2':
      output = Number(userNumb1) - Number(userNumb2);
      break;
    case '3':
      output = Number(userNumb1) * Number(userNumb2);
      break;
    case '4':
      output = Number(userNumb1) / Number(userNumb2);
      break;
  }

  //print the result
  prompt(messages('output', language) + output + '!');

  prompt(messages('again', language));
  let answer = readline.question();

  while (!['y', 'n'].includes(answer)) { //catch non yes or no inputs
    console.log("Please answer with Yes or No.");
    answer = readline.question();
  }

  if (answer[0].toLowerCase() === 'y') {  //again (clear console) or not (end program)
    console.clear();
  } else if (answer[0].toLowerCase() === 'n') {
    break;
  }
}