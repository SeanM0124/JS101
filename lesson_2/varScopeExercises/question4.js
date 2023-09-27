//What will the following log to the console and why?

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

/*
This will throw an error, i think a reference error.
Its trying to log a variable that is not yet defined.
*/