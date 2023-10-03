//What will the following code output?

console.log([1, 2, 3] + [4, 5]);
//Before running the code, i think that this will print:
//[1, 2, 3][4, 5]

// I was wrong, the output was
//1,2,34,5
//the array was coerced into strings, then added.