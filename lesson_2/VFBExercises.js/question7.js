//What will the following log to the console and why?

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/*
Similar to the last example, however in this one the functions are prepared
to take an arguement

This will log
hello
Hello
Hello!!!
*/