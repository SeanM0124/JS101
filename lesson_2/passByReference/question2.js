//What will the following code log to the console and why?
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

//In thhis example, since the value of word is being returned,
//myWord value is changed (reassigned);
//This logs "Hello" and "HELLO"