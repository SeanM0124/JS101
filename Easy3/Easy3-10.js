//What Century is that?

/*
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

the years 1901 - 2000 comprise the 20th
*/

function century(year) {
  let centuryNum = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNum -= 1;
  }
  console.log(centuryNum.toString() + centurySuffix(centuryNum));
  return centuryNum.toString() + centurySuffix(centuryNum);
}

function centurySuffix(centuryNum) {
  if (catchWithTh(centuryNum % 100)) {
    return 'th';
  }

  let lastDigit = centuryNum % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"