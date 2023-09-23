//Odd Numbers
//Log all odd numbers from 1 to 99, inclusive, to the console,
//with each number on a separate line.\

let counter = 0;

while (counter < 100) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
  counter++;
}
