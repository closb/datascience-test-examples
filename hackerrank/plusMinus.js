'use strict';

/**
 * Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
 *
 * @param {array} arr - an array of integers
 * @returns {array} an array of ratios of positive, negative and zero values
 *
 */

// Sample input
let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    // define variables for positive, negative and zero values
  let positive = 0;
  let negative = 0;
  let zero = 0;

  // define variable for length of the array
  let n = arr.length;

  // loop through the array
  for (let i = 0; i < n; i++) {

    // if value is positive increment pos variable
    if (arr[i] > 0) {
      positive++; 
      // if value is negative increment neg variable
    } else if (arr[i] < 0) {
      negative++;
        // if value is zero increment zero variable
    } else {
      zero++;
    }
  }
    let pos = positive / n;
    let neg = negative / n;
    let zer = zero / n;

  // printout the ratio of positive, negative and zero values to fixed decimal position of 6
  
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

// this must be removed in hacker rank or it will fail. 
plusMinus(arr);
