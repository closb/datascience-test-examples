/**
 * find median that has the following parameter(s):
 * int arr[n]: an array of integers
 * 
 * Returns
 * 
 * int: the median of the array
 * 
 * Input Format
 * 
 * The first line contains the integer, n, the size of arr.
 * 
 * The second line contains n space-separated integers arr[i].
 * 
 */

/** Constraints
 * 
 * 1 <= n <= 1000000
 * 
 * 0 <= arr[i] <= 10^5
 * 
 */

// Output the median of the array.

/**
 * Sample Input
 * 
 *  0 1 2 4 6 5 3
 * 
 * Output
 * 
 *  3
 * 
 * Explanation
 * 
 *  The sorted array arr = [0, 1, 2, 3, 4, 5, 6]. 
 *  It's middle element is at index 3 and the median is 3.
 * 
 */

let arr = [0, 1, 2, 4, 6, 5, 3];

// Complete the findMedian function below.

function findMedian(arr) {
  // sort the array first to get the median
  arr.sort((a, b) => a - b);

  // now find the middle index by dividing the length of the array by 2
  const middleIndex = Math.floor(arr.length / 2);

  // return the middle index of the array
  return arr[middleIndex];
}

// this must be removed for the test to pass
findMedian(arr);

// Solution accepted by HackerRank
// Used Quokka.js to test the code
