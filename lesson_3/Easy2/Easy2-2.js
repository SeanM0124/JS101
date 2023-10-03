/*
The Array.prototype.reverse method reverses the order
of elements in an array, and Array.prototype.sort
can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate
the original array as shown below. Write two distinct
ways of reversing the array without mutating the original
array. Use reverse for the first solution, and sort for the second.
*/
let reversedArray = [];
let numbers = [1, 2, 3, 4, 5];
reversedArray = numbers.slice().reverse();
console.log(numbers);
console.log(reversedArray);

reversedArray = [];
numbers = [1, 2, 3, 4, 5];
reversedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(reversedArray);

reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray);