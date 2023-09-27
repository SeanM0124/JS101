//What will the following code log to the console and why?
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

//due to myWords referencing an object,
//it is mutated when passed into the function
//this logs first ['Hello', 'Goodbye']
//followed by the mutated objects value of
//['Hi', 'Goodbye']