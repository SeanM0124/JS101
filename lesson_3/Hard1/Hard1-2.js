//What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => "[1, 2]"
//the final line of code out puts {first: [1, 2]}
// I assume this is because of pass by reference.
// numArray = object["first"]. which is [1], then 2 is pushed onto the array
//value that is held in the key "first".
//so first: [1,2]