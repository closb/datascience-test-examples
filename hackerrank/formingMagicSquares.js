// We define magic square to be an n x n matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

// You will be given a 3 x 3 matrix s of integers in the inclusive range [1,9]. We can convert any digit a to any other digit b in the range [1,9] at cost of |a-b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

// Example

// $s = [[5,3,4],[1,5,8],[6,4,2]]

// The matrix looks like this:

// 5 3 4
// 1 5 8
// 6 4 2

// We can convert it to the following magic square:

// 8 3 4
// 1 5 9
// 6 7 2

// This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.

// Function Description

// Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

// formingMagicSquare has the following parameter(s):

// int s[3][3]: a 3 x 3 array of integers

// Returns

// int: the minimal total cost of converting the input square to a magic square

// Input Format

// Each of the 3 lines contains three space-separated integers of row s[i].

// Constraints

// s[i][j] E [1,9]

// Sample Input 0

// 4 9 2
// 3 5 7
// 8 1 5

// Sample Output 0

// 1

// Explanation 0

// If we change the bottom right value, s[2][2], from 5 to 6 at a cost of |6-5| = 1, s becomes a magic square at the minimum possible cost.

// Sample Input 1

// 4 8 2
// 4 5 7
// 6 1 6

// Sample Output 1

// 4

// Explanation 1

// Using 0-based indexing, if we make

// s[0][1] -> 9 at a cost of |9-8| = 1
// s[1][0] -> 3 at a cost of |3-4| = 1
// s[2][2] -> 8 at a cost of |8-6| = 2

// then the total cost will be 1 + 1 + 2  = 4.

// Solution

/**
 * @param {number[][]} s
 */

function formingMagicSquare(s){
      // initialize cost variable with max safe integer
  let cost = Number.MAX_SAFE_INTEGER;
  // create an array of all possible magic squares
  let allMagicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ];
  // loop through each magic square
  for (let i = 0; i < allMagicSquares.length; i++) {
    // initialize current cost variable
    let currentCost = 0;
    // loop through each row
    for (let j = 0; j < s.length; j++) {
      // loop through each column
      for (let k = 0; k < s[j].length; k++) {
        // get cost by adding the absolute value of the difference between the current value and the current magic square
        currentCost += Math.abs(s[j][k] - allMagicSquares[i][j][k]);
      }
    }
    // if the current cost is less than the cost, set cost to the current cost
    if (currentCost < cost) cost = currentCost;
  }

  return cost;
}

// CSP function addressing constraints of the problem

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    // constraints 3x3 matrix with s as the pointer for input
    let s = Array(3);
    // loop through each row
    for (let i = 0; i < 3; i++) {
        // split each row into an array of numbers and map to integers after $
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt
        // convert each string to an integer
        (sTemp, 10));
    }
    // call function
    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
// answer accepted by hackerrank
