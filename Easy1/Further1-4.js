//How big is the room?

//Build a program that asks the user to enter the length
//and width of a room in meters, and then logs the area of
//the room to the console in both square meters and square feet.

const readline = require('readline-sync');
const METERS_TO_FEET = 10.7639;
const FEET_TO_METERS = .092903;


function getUnit() {
  console.log('What unit type would you like to use?\n Meters\n Feet');
  return readline.question().toLowerCase();
}

function getLength(unit) {
  console.log(`What is the length in ${unit}?`);
  return Number(readline.question());
}

function getWidth(unit) {
  console.log(`What is the width of the room in ${unit}?`);
  return Number(readline.question());
}

function getArea(length, width) {
  return length * width;
}

function result(area, unit) {
  if (unit === 'meters') {
    let areaInFeet = (area * METERS_TO_FEET).toFixed(2);
    console.log(`The area of the room is ${area} square meters 
        (${areaInFeet} square feet)`);
  } else {
    let areaInMeters = (area * FEET_TO_METERS).toFixed(2);
    console.log(`The area of the room is ${area} square feet
        (${areaInMeters} square meters)`);
  }
}

function again() {
  console.log('Would you like to calculate another?\n Yes\n No');
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