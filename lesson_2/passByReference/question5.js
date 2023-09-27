//What will the following code log to the console and why?
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

//myWords is set to reference and object
//my words is passed into a function where it is
//1. Logged ['Hello', 'Goodbye']
//2. The passed arguement is reassigned to a new array
//The progrma then finishes by logging ['Hello', 'Goodbye']
