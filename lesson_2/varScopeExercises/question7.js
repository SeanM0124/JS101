//What will the following log to the console and why?
let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

/*
This will log either 6 or nothing. If it creates an infinite loop
it will not log anything.
*/