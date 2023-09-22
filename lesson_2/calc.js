const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function welcome(lang) {
  prompt('welcome', lang);
}

function output (lang, output) {
  prompt('result', lang, output);
}

function chooseLanguage() {
  prompt('chooseLanguage');
  return readline.question();
}

function messages(message, lang = 'begin') {
  return MESSAGES[lang][message];
}

function langCheck() {
  let language = chooseLanguage();

  while (langError(language)) {
    language = 
  }
}

function getFirstNum() {
  prompt()
}

function checkForAnotherOp(string) {
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
