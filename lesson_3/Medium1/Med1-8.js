let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
//Did the family's data get ransacked? Why or why not?
//Yes it did. objects are pass-by-reference in JS, and the function mutated
//the array which references the same object as munsters.
messWithDemographics(munsters);
console.log(munsters);