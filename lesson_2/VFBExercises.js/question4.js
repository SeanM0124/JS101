//What will the following log to the console and why?

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

/*
In this example, similar to the previous one, there is two color strings
and one colors array.

The function takes two arguements colors and color
The function takes the color arguement and pushes it to the colors array
it then return the colors array

at line 10 a new variable newColors is init'd set equal to the call
of the updateColors function taking colors and color1 as an arguement

this returns colors with color1 pushed on.

the function is called again with color2 as the 2nd arguement
It also has newColors as its 1st arguement, which references the same array as
the colors array.

the program ends after logging colors which after being returned in both calls
is: ['red', 'green', 'blue', 'purple', 'pink']
*/