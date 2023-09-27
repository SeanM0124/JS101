//What does the following log to the console?

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

//logs ['Hi', 'Goodbye'] and 'Hello'