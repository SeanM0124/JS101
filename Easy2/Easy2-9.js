//How old is Teddy?

/*
Build a program that randomly generates Teddy's age,
and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).
*/

function getTeddyAge() {
  return Math.floor((Math.random() * 101) + 20);
}

// let age = getTeddyAge();
console.log(`Teddy is ${getTeddyAge()} years old!`);
// console.log(`Teddy is ${getTeddyAge()} years old!`);
// console.log(`Teddy is ${getTeddyAge()} years old!`);
// console.log(`Teddy is ${getTeddyAge()} years old!`);