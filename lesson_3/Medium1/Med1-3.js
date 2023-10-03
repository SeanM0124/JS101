// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) { //restrict to numbers greaster than 0
    if (number % divisor === 0) { // checks for factor: if an int, is a factor
      factors.push(divisor);
    } //changing the above line reverses the order of the factors array
    divisor -= 1; //divisor range: number >= divisor > 0
  }
  return factors;
}

console.log(factors(20));