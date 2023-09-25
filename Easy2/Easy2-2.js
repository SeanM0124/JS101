//Greeting a user

/*
Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.
*/

let readline = require('readline-sync');

function greetUser() {
  console.log('What is your name?');
  let name = readline.question();

  if (name.includes('!')) {
    name = (name.slice(0, -1)).toUpperCase();
    console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greetUser();