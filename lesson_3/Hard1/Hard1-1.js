//will the following functions return the same results?

function first() {
  return {
    prop1: "hi there" //returns prop 1
  };
}

function second() {
  return  //return statement is not connected to obj.
  {
    prop1: "hi there" //unreachable code
  };
}

console.log(first()); //returns "prop1: 'hi there'"
console.log(second()); //error? - no returns undefined with no errors

