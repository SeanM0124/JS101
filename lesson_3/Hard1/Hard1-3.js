//Given the following similar sets of code, what will each code snippet print?

//A
// function messWithVars(one, two, three) {
//   one = two; //due local variables do not effect the global ones.
//   two = three; // variable shadowing?
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //["one"]
// console.log(`two is: ${two}`); //["two"]
// console.log(`three is: ${three}`); //["three"]

// // //B
// function messWithVars(one, two, three) {
//   one = ["two"];  //being reassigned?
//   two = ["three"]; //variable shadowing?
//   three = ["one"]; //dont effect global variables
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //["one"]
// console.log(`two is: ${two}`); //["two"]
// console.log(`three is: ${three}`);//["three"]

//C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two"); //splice can mutate arrays, but are they still shadowing?
  two.splice(0, 1, "three"); //starts at index 0, deletes one, then replaces with an item
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"]

messWithVars(one, two, three);

console.log(`one is: ${one}`); //["two"]
console.log(`two is: ${two}`); //"[three]"
console.log(`three is: ${three}`);//["one"]