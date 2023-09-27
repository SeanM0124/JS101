//What will the following code log to the console and why?

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

//Code will log on one line 5, and on the next 10.
//num is reachable inside myFunc, so first its pre-assigned
//value is logged, then it is reassigned,
//and later logged after the function call.