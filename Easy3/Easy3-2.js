//Bannerizer

/*
Write a function that will take a short line of text,
and write it to the console log within a box.
*/

function logInBox(string) {
  let horizontals = "-".repeat(string.length + 2);
  let verticals = "|" + " ".repeat(string.length + 2) + "|";

  console.log(`+${horizontals}+`);
  console.log(verticals);
  console.log(`| ${string} |`);
  console.log(verticals);
  console.log(`+${horizontals}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('Live, Laugh, Love, UwU');