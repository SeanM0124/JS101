//right triangles

/*
Write a function that takes a positive integer, n,
as an argument and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle, should have one end at the lower-left
of the triangle, and the other end at the upper-right.
*/

function triangle(num) {
  let spaces = num - 1;
  let stars = 1;
  while (num > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    num -= 1;
    stars += 1;
    spaces -= 1;
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********