//What will the following log to the console and why?

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/*
This example has two functions
The first takes no arguement, and returns word[0] uppercased + word sliced at
index [1]

The 2nd returns word + a string added onto it.

The example init'd 3 variables
the first one, word, is set to a string

the 2nd, capitalizedWord is set to the function call capitalize
where it takes word as an arguement

the 3rd, exclaimWord is set to the exlaim function
which takes capitalizedWord as an arrgument.

Finally it will log:
hello!!!
Hello
hello!!!

*/