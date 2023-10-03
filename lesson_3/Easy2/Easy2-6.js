let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//solution with concat and spread syntax
let newArray = [].concat(...flintstones);
console.log(newArray);

//reduce solution
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

//foreach Solution _ concat
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
//.flat() solution
let newFlintstones = flintstones.flat();

