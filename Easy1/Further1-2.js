const readline = require('readline-sync');
/*
Repeat this exercise with a technique different from the one
that you used, and different from the one provided.
Also consider adding a way for the user to specify
the limits of the odd numbers logged to the console.
*/

//First technique:
// let counter = 0;

// while (counter < 100) {
//   if (counter % 2 === 1) {
//     console.log(counter);
//   }
//   counter++;
// }

function invalidNum(num) {
  let isNaN = Number.isNaN(Number(num));
  let isEmpty = num.trim() === '';

  return isNaN || isEmpty;
}

function getMinLimit(maxLimit) {
  console.log('Please set a min limit.');
  let lowLimit = readline.question();

  while (invalidNum(lowLimit) || lowLimit > maxLimit) {
    console.log('That is not a valid input, please enter again.');
    console.log('Remember, your minimum must be lower than your maximum.');
    lowLimit = readline.question();
  }
  return lowLimit;
}


function getMaxLimit() {
  console.log('Please set a max limit.');
  let maxLimit = readline.question();

  while (invalidNum(maxLimit)) {
    console.log('That is not a valid input, please enter again.');
    maxLimit = readline.question();
  }
  return maxLimit;
}

function logAllOddNumbers(minLimit, maxLimit) {
  while (minLimit < maxLimit) {
    if (minLimit % 2 === 1) {
      console.log(minLimit);
      minLimit += 2;
    } else {
      minLimit += 1;
    }
  }
}

function oddNumbers() {
  let maxLimit = Number(getMaxLimit());
  let minLimit = Number(getMinLimit(maxLimit));

  logAllOddNumbers(minLimit, maxLimit);
}

oddNumbers();
