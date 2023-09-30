/*
You may have noticed that the solution continues iterating until
index points to the last character in the string, which means that
text[index + 1] is beyond the end of the string during the last iteration.
Why does it do this? What happens if we stop iterating when index is equal
to text.length - 1?

It's also possible to solve this using regular expressions.
For a nice challenge, give this a try with regular expressions.
Can you think of any other solutions that don't use regular expressions?
*/
// function crunch(string) {
//   let newString = '';
//   for (let index = 0; index < string.length; index++) {
//     if (string[index] !== string[index + 1]) {
//       newString += string[index];
//     }
//   }
//   return newString;
// }


//regexone.com has nice regex tutorial, have some fundamental
//understanding of them
function regExCrunch(string) {
  let newString = string.replace(/(\w)\1+/g, "$1");
  return newString;
}

console.log(regExCrunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(regExCrunch('4444abcabccba'));              // "4abcabcba"
console.log(regExCrunch('ggggggggggggggg'));            // "g"
console.log(regExCrunch('a'));                          // "a"
console.log(regExCrunch(''));                           // ""