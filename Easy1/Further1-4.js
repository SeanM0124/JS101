//How big is the room?

//Build a program that asks the user to enter the length
//and width of a room in meters, and then logs the area of
//the room to the console in both square meters and square feet.

const readline = require('readline-sync');
const METERS_TO_FEET = 10.7639;
const FEET_TO_METERS = .092903;

function invalidNum(num) {
  let isNaN = Number.isNaN(Number(num));
  let isNegativeOrZero = Number(num) <= 0;
  let isEmpty = num.trim() === '';

  return isNaN || isNegativeOrZero || isEmpty;
}

function invalidUnit(string) {
  return (!['feet', 'meters'].includes(string) || string.trimStart() === '');
}

function getUnit() {
  console.log('What unit type would you like to use?\n Meters\n Feet');
  let string = readline.question().toLowerCase();

  while (invalidUnit(string)) {
    console.log ('That is a valid input of meters or feet, try again.');
    string = readline.question();
  }
  return string;
}

function getLength(unit) {
  console.log(`What is the length in ${unit}?`);
  let number = (readline.question());

  while (invalidNum(number)) {
    console.log ('That is not a valid number, please try again.');
    number = (readline.question());
  }
  return number;
}

function getWidth(unit) {
  console.log(`What is the width of the room in ${unit}?`);
  let number = (readline.question());

  while (invalidNum(number)) {
    console.log ('That is not a valid number, please try again.');
    number = (readline.question());
  }
  return number;
}

function getArea(length, width) {
  return Number(length) * Number(width);
}

function result(area, unit) {
  if (unit === 'meters') {
    let areaInFeet = (Number(area) * METERS_TO_FEET).toFixed(2);
    console.log(`The area of the room is ${area} square meters 
        (${areaInFeet} square feet)`);
  } else {
    let areaInMeters = (Number(area) * FEET_TO_METERS).toFixed(2);
    console.log(`The area of the room is ${area} square feet
        (${areaInMeters} square meters)`);
  }
}

function again() {
  console.log('Would you like to calculate another?\nYes\nNo');
  return String(readline.question().toLowerCase());
}

while (true) {
  let unit = getUnit();
  let length = getLength(unit);
  let width = getWidth(unit);
  let area = getArea(length, width);

  result(area, unit);

  let answer = again();

  if (["n", "no"].includes(answer)) break;
}