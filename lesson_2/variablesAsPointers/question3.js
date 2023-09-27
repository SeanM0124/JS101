//What does the following log to the console?

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

//logs ["Hi", "Goodbye"] and ["Hello", "Goodbye"]
//Edit: logs ["Hi", "Goodbye"] twice
//