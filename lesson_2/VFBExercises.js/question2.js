//What will the following log to the console and why?

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/*
In this example, the function takes two paramaters, but in its call,
only one is given.
Calling the function will .push and undefined mutation onto the
colors array.

This will log: ['red', 'green', 'blue', undefined]
*/