//What will the following log to the console and why?

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

/*
In this example, color is set to a string, and colors is set to an array


There is two functions;

The first takes two arguements, and pushes the 2nd arguement onto the 1st,
being colors and color respectively.
It then returns the first arguement.

The 2nd function takes one arguement,
it sets the arguement equal to the .pop arguement being called on colors
it then returns the arguement, being colors

Then, a new variable is init'd called newColors, which is set equal to
the variable colors being passed into the 2nd function,
returning ['red', 'green']

The first function is called with colors and color as arguement, pushing color
onto colors and returning colors, ['red', 'green', 'blue'], since
color was returned as 'blue'

Finally, newColors is logged to the console. which points to the
same array as colors; ['red', 'green', 'blue']
*/