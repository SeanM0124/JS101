//What will the following log to the console and why?


let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

//this will log 10

//edit: 5 is logged. the num param passed to myFunc causes a new
//function to be made within the inner scope