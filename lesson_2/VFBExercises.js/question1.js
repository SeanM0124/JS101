//What will the following log to the console and why?

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/*
This will log ['red', 'green', 'blue', 'yellow']
this is because the functions mutates the
colors array with the .push method
*/