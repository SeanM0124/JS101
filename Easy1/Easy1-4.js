//How big is the room?

//Build a program that asks the user to enter the length
//and width of a room in meters, and then logs the area of
//the room to the console in both square meters and square feet.

const readline = require('readline-sync');

console.log('What is the length of the room in meters?');
let length = readline.question();

console.log('What is the width of the room in meters?');
let width = readline.question();

function getArea(length, width) {
  let areaInMeters = length * width;
  let areaInFeet = areaInMeters * 10.7639;
  console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`);
}

console.log(getArea(length, width));