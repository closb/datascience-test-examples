/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *
 * Note:
 *
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Example
 *
 * s = '12:01:00PM'
 *
 * Return '12:01:00'
 *
 * s = '12:01:00AM'
 *
 * Return '00:01:00'
 *
 */

// Function Description

/**
 *
 * timeConversion has the following parameter(s):
 *
 * string s - a time in 12 hour format
 *
 * Returns
 *
 * string: the time in 24 hour format
 *
 */

// Input Format

/**
 * A single string s that represents a time in 12-hour clock format
 */

// Constraints

/**
 * All input times are valid
 *
 * 12 <= hh <= 12
 * 00 <= mm, ss <= 59
 *
 */

// Output Format

/**
 * Convert and print the given time in 24-hour format, where 00 <= hh <= 23.
 *
 * Sample Input 0
 *
 * 07:05:45PM
 *
 * Sample Output 0
 *
 * 19:05:45
 *
 * Sample Input 1
 *
 * 12:40:22AM
 *
 * Sample Output 1
 *
 * 00:40:22
 *
 * Sample Input 2
 *
 * 12:45:54PM
 *
 * Sample Output 2
 *
 * 12:45:54
 *
 */

'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// Complete the timeConversion function below.

// let amPm = ['12:01:00PM', '12:01:00AM', '07:05:45PM', '12:40:22AM', '12:45:54PM'];

function timeConversion(s) {
  let amPm = s.charAt(8);
  let militaryTime = '';

  // traverse the string to convert to military time
  if (amPm === 'A') {
    if (s.substring(0, 2) === '12') {
      militaryTime = '00';
    } else {
      militaryTime = s.substring(0, 2);
    }
  } else {
    if (s.substring(0, 2) === '12') {
      militaryTime = s.substring(0, 2);
    } else {
      militaryTime = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  return militaryTime + s.substring(2, 8);
}
console.log(timeConversion('12:01:00PM'));

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const s = readLine();

//   const result = timeConversion(s);

//   ws.write(result + '\n');

//   ws.end();
// }
