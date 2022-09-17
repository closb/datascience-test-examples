// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// Function Description

/**
 *  Complete the diagonalDifference function
 *
 *  diagonalDifference has the following parameter(s):
 *
 *     int arr[n][m]: an array of integers
 *
 *  Returns
 *
 *   int: the absolute diagonal difference
 *
 *  Input Format
 *
 *  The first line contains a single integer, n, the number of rows
 *  and columns in the square matrix arr.
 *
 *  Each of the next n lines describes a row, arr[i],
 *  and consists of n space-separated integers arr[i][j]
 *
 *  Constraints
 *
 *  -100 <= arr[i][j] <= 100
 *
 *  Output Format
 *
 *  Return the absolute difference between the sums
 *  of the matrix's two diagonals as a single integer.
 *
 *
 */

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output

// 15

// Explanation

/**
 *  The primary diagonal is:
 *  11
 *     5
 *       -12
 * Sum across the primary diagonal: 11 + 5 - 12 = 4
 *
 * The secondary diagonal is:
 *      4
 *   5
 * 10
 *
 * Sum across the secondary diagonal: 4 + 5 + 10 = 19
 * Difference: |4 - 19| = 15
 *
 * Note: |x| is the absolute value of x
 */

// Solution

function diagonalDifference(arr) {
    // create variables to hold the sums of the diagonals
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    // create variable for length of array to use as index
    let arrLength = arr.length;
    let arrIndex = arrLength - 1;

    // loop through the array
    for (let i = 0; i < arrLength; i++) {
        // add the value of the current index to the first diagonal
        primaryDiagonal += arr[i][i];
        // add the value of the current index to the second diagonal
        secondaryDiagonal += arr[i][arrIndex];
        // decrease the index of the second diagonal
        arrIndex--;
  }
    // return the absolute value of the difference between both diagonals
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

// This must be removed for the test to pass
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

// Solution accepted by HackerRank
