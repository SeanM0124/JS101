/*
The following function unnecessarily uses two return
statements to return boolean values. Can you rewrite this
function so it only has one return statement and does not
explicitly use either true or false?
Try to come up with 2 solutions.
*/

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return ["blue", "green"].includes(color);
  }
}

function isColorValid(color) {
  return (color === "blue" || color === "green");
}


const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => ["blue", "green"].includes(color);