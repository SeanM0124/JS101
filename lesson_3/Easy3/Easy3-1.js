//Write three different ways to remove all of
//the elements from the following array:
/*
1. pop for the length
2. shift for the length
3. for each or another method? maybe can manipulate length?
*/


let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.shift();
}

console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.length -= 1;
}

console.log(numbers);