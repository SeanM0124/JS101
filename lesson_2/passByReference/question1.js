//What will the following code log to the console and why?
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

//This will log 'Hello' and 'Hello'


//The function does not return the new reassigned value of
//word