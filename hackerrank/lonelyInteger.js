// lonelyInteger.js
// given an array of integers, find the integer that appears only once
// https://www.hackerrank.com/challenges/lonely-integer

// example
// a = [1,2,3,4,3,2,1]
// the lonely integer is 4

// Function Description

/**
 * lonelyInteger has the following parameter(s):
 * int a[n]: an array of integers
 *
 * Returns
 * int: the element that occurs only once
 *
 */

// Input Format

/**
 * The first line contains a single integer, n,
 * the number of integers in the array.
 *
 * The second line contains n space-separated integers
 * that describe the values in a.
 *
 */

// Constraints

/**
 * 1 <= n < 100
 * it is guaranteed that n is an odd number
 * 0 <= a[i] <= 100, where 0 <= i < n
 */

// Solution

function lonelyInteger(a) {
  // sort the array of integers
  a.sort();
  // loop through the array
  for (let i = 0; i < a.length; i++) {
    // if the current integer is not equal to the next integer
    if (a[i] !== a[i + 1]) {
      // return the current integer
      return a[i];
    }
    // otherwise, increment i to skip the next integer
    i++;
  }
}

// example
// a = [1,2,3,4,3,2,1]
// the lonely integer is 4
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));

// Solution 2

function lonelyinteger(a) {
  // create an empty object
  let nums = {};
  // loop through the array
  for (let i = 0; i < a.length; i++) {
    // if the current integer is not in the object
    if (!nums[a[i]]) {
        // add the current integer to the object
      nums[a[i]] = 1;
    } else {
      nums[a[i]]++;
    }
  }
    // loop through the object
  for (let num in nums) {
    // if the current integer is equal to 1
    if (nums[num] === 1) {
        // return the current integer
        return num;
    }
  }
}

// console.log must be removed for the test to pass
console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

// accepted by HackerRank