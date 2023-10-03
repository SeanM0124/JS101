let nanArray = [NaN];

console.log(nanArray[0] === NaN);


//I would guess true but im skeptical.
//it was false

//To reliably test if a number is NaN you can use .isNaN
console.log(Number.isNaN(nanArray[0])); // true