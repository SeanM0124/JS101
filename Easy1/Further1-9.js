//Leap Years (Part 2)

/*
The British Empire adopted the Gregorian Calendar in 1752,
which was a leap year. Prior to 1752, they used the Julian Calendar.
Under the Julian Calendar, leap years occur
in any year that is evenly divisible by 4.

Using this information,
update the function from the previous exercise to determine
leap years both before and after 1752.
*/
const readline = require('readline-sync');

function isLeapYear(year) {
  if (year > 1752) {
    if (year % 400 === 0) {
      console.log('You were born during a leap year!');
      return true;
    } else if (year % 100 === 0) {
      console.log(`${year} was not a leap year.`);
      console.log(false);
    } else {
      console.log(`${year} was not a leap year.`);
      return year % 4 === 0;
    }
  } else if (year <= 1752) {
    console.log('You were born during a leap year!');
    return year % 4 === 0;
  }
  return false;
}

function whatYear() {
  console.log('What year were you born on?');
  let birthYear = readline.question();
  return birthYear;
}

function bornOnFeb29th() {
  console.log('Were you born on Febuary 29th?');
  let answer = readline.question();

  if (answer === 'yes') {
    return true;
  } else {
    return false;
  }
}

function howOldAreYou(year, birthday) {
  if (isLeapYear && birthday) {
    console.log('You have a birthday coming up in 2024!');
    let age = (2024 - year) / 4;
    console.log(`You will be turning ${age}, right?`);
  } else {
    let age = 2024 - year;
    console.log(`Oh youre normal, youll be turning ${age}.`);
  }
}

let year = whatYear();

let birthday = bornOnFeb29th();

howOldAreYou(year, birthday);

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true