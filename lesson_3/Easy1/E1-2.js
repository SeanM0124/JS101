let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function strContainsExclaim(str) {
  if (str[str.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(strContainsExclaim(str1));
console.log(strContainsExclaim(str2));

// str1.endsWith("!"); // true
// str2.endsWith("!"); // false

//easier strategy is to use the .endsWith method.