//What does the following log to the console?


let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

//logs ['Hi', 'Bye'] and ['Hello', 'Goodbye']