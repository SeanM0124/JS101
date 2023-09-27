//What does the following log to the console?

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

//logs ['Hi', 'Goodbye'] and 'Hello'