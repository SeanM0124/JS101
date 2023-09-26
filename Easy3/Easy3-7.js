//Double doubles

/*
Write a function that returns the number provided as an argument
multiplied by two, unless the argument is a double number;
otherwise, return the double number as-is.
*/


function twice(num) {
  if (isDoubleNumber(num)) {
    console.log(num);
    return num;
  } else {
    console.log(num * 2);
    return num * 2;
  }
}

function isDoubleNumber(num) {
  let string = num.toString();
  let center = Math.floor(string.length / 2);
  let firstHalf = string.substring(0, center);
  let secondHalf = string.substring(center);

  return firstHalf === secondHalf;
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676