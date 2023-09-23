/*
    Multiples of 3 and 5
Write a function that computes the sum of all numbers
between 1 and some other number, inclusive,
that are multiples of 3 or 5.
For instance, if the supplied number is 20,
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/

function multisum(num) {
  let targetNum = 0;
  for (let count = 0; count <= num; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      targetNum += count;
    }
  }
  //return targetNum;
  console.log(targetNum);
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168