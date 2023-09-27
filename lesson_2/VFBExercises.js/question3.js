//What will the following log to the console and why?

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

/*
This example has the function called twice, each time taking
a different second arguement.

the colors declaration points to an array of strings, in the global scope

On the first call, color1 is passed as an arguement. Its value is then
pushed onto the colors array.

on the second call, colors2 is passed as an arguement.
Its value is then pushed on to the colors array

The colors array is then logged as: ['red', 'green', 'blue', 'purple', 'pink']
*/