//What does the following code output?

let answer = 42;

function messWithIt(someNumber) { //answer
  return (someNumber += 8); //return 50
}

let newAnswer = messWithIt(answer); //pass by value -> new answer = 50
//answer still = 42
console.log(answer - 8); //logs 34