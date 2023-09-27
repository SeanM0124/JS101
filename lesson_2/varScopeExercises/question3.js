//What will the folowing log to the conbsoel and why?

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

//This will log 5.
//The use of let in myfunc creates a new variable
//inside the block scope that is never used