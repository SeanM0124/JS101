//What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
//before running the code i expect the following output since
//it is an object, and slice creates a shallow copy but references the same obj
//[{ first: 42 }, { second: "value2" }, 3, 4, 5]

//I was correct.