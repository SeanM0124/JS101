//What will the following code log to the console and why?
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

//First it logs "Hello", due to line 3.
//myOtherWord is then assigned to "HELLO"
//the value of myWord is not reassigned, so on line 11 "Hello"
//is logged, followed by "HELLO", due to its assignment