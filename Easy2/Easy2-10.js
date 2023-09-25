//When will I retire?

/*
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.
*/

let readline = require('readline-sync');
// const YEAR = 2023;

let age = Number(readline.question('How old are you? '));

let futureAge = Number(readline.question('What age would you like to retire? '));

let currentYear = new Date().getFullYear();

let difference = futureAge - age;
let yearRetire = currentYear + difference;

console.log(`The year is ${currentYear}. You will retire in ${yearRetire}.`);
console.log(`You only have ${difference} years of work to go!`);
