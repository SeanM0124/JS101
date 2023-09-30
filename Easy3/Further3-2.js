// //Bannerizer

// /*
// Modify this function so that it truncates the message if
// it doesn't fit inside a maximum width provided as a second argument
// (the width is the width of the box itself). You may assume no maximum
// if the second argument is omitted.

// For a challenging but fun exercise, try word wrapping messages
// that are too long to fit, so that they appear on multiple lines
// but are still contained within the box. This isn't an easy problem,
// but it's doable with basic JavaScript.
// */
const readline = require('readline-sync');

// // function logInBox(string) {
// //   let horizontals = "-".repeat(string.length + 2);
// //   let verticals = "|" + " ".repeat(string.length + 2) + "|";

// //   console.log(`+${horizontals}+`);
// //   console.log(verticals);
// //   console.log(`| ${string} |`);
// //   console.log(verticals);
// //   console.log(`+${horizontals}+`);
// // }

function getWidth() {
  return readline.question('What is the width of the box?');
}

function getString() {
  return readline.question('What is the message?');
}


let width = Number(getWidth());
let string = getString();

//solution taken from josua in discussion, performing analysis to understand:

function logInBoxWrap (string, width) {
  let topAndBottom = [`+${"-".repeat(width - 2)}+`,`|${" ".repeat(width - 2)}|`];
  //here topAndBottom is assigned to an array, being the top
  //and bottom of the banner
  let strArray = string.split(''); //takes the string and splits it into an array
  let txtLines = [];

  while (strArray.length) {
    let line = `| ${strArray.splice(0, width - 4).join('')}`;
    // line = the string split to width -4
    if (line.length < width - 2) {
      txtLines.push(`${line.concat(' '.repeat(width - line.length - 2))} |`);
      //if the line is smaller than the width -2, the line is added
      //to the txtLines array.
    } else {
      txtLines.push(line + " |");
    }
  }

  //This code is splitting the string into substrings
  //and saving them to an array. this allows it to be printed forEach
  //index of the array

  topAndBottom.forEach(line => console.log(line));
  txtLines.forEach(line => console.log(line)); //for each substring < width, print
  //topAnd bottom reversed makes bottom of banner, clever
  topAndBottom.reverse().forEach(line => console.log(line));
}
logInBoxWrap(string, width);


/*
this does not account for varying length of strings:
+-----------------+
|                 |
| Here i am on th |
| is road i walk  |
| alone, all alon |
| e, with my cats |
|                 |
+-----------------+
overall it works, but doesn't print as well as youd want.
//how to improve so that it does??
*/

