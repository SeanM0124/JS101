//what will the following log to the console and why?
let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);
/*
logs:
'Hello'
'Hello'
'HELLO'


Edit: I thought from MDN that toUpperCase();
did not return a new string
logs
Hello
Hello
Hello
*/