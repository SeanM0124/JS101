//What will the followign log to the consoel and why?

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

/*
since there is a reassignment for the variable, this will log the
returned array called on by toUpperCase();
This will log
['HELLO']
*/