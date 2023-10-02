//Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; // It will not raise an error, it will create empty slots
//in the space from index 2 - index 6

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
// [1, 2, 3, undefined, undefined, undefined, 5]
//it will return undefined