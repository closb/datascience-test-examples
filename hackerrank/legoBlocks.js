// You have an infinite number of 4 tyoes of lego blocks sizes given as ( depth x width x height )

// d  h  w
// 1  1  1
// 1  1  2
// 1  2  1
// 2  1  1

// Using the blocks, you want to make a wall of heights n and widh m. Features of the wall are;

// 1. The wall should not have any holes.
// 2. The wall you build should have only solid structure so there should not be a straight vertical break across all rows of bricks.
// 3. The bricks must be laid horizontally.

// How many ways can the wall be built?

// Example

// n = 2
// m = 3

// The hight is 2 and width is 3. Here are some configurations of the wall.

// There are 9 valid permutations of the wall.

// Function Description

// Complete the legoBlocks function in the editor below. It should return an integer that represents the number of ways to build the wall.

// legoBlocks has the following parameter(s):

// n: an integer that represents the height of the wall
// m: an integer that represents the width of the wall

// Returns

// int: the number of valid wall formations modulo 10^9 + 7

// Input Format

// The first line contains an integer t, the number of test cases.
// Each of the next t lines contains two space-separated integers n and m.

// Sample Input

// STDIN   Function
// -----   --------
// 4       t = 4
// 2 2     n = 2, m = 2
// 3 2     n = 3, m = 2
// 2 3     n = 2, m = 3
// 4 4     n = 4, m = 4

// Sample Output

// 3
// 7
// 9
// 3375

// Explanation

// For the first test case, there are 3 valid wall formations.

// 3  mod 10^9 + 7 = 3

// For the second test case each row of the wall can contain either two blocks of width 1 or one block of width 2. However, the wall where all rows contain two blocks of width 1 is not a solid one as it can be divided vertically. Thus, the number of ways is 7.

// 2x2x2-1 = 7 and 7 mod 10^9 + 7 = 7

// Solution

/**
 *
 * @param {*} n
 * @param {*} m
 */

// solution by @mciesin (https://www.hackerrank.com/mciesin)
function legoBlocks(n, m) {
  // create variable for modulo - divMod
  const divMod = 1000000007n;
  // create variable for number of ways
  const nWays = [1n];
  // iterate through width of all
  for (let i = 1; i <= m; ++i) {
    nWays[i] = nWays[i - 1];
    i > 1 && (nWays[i] = nWays[i] + nWays[i - 2]);
    i > 2 && (nWays[i] = nWays[i] + nWays[i - 3]);
    i > 3 && (nWays[i] = nWays[i] + nWays[i - 4]);
    nWays[i] %= divMod;
  }
  // create const for stack queStack
  const queStack = [...nWays];
  // iterate through height of wall
  Array.from({ length: n - 1 }).forEach(() => {
    for (let i = 0; i < queStack.length; ++i) {
      queStack[i] = (queStack[i] * nWays[i]) % divMod;
    }
  });
  // create variable for recursion recFunc
  let recFunc = [];
  // loop through queStack
  for (let i = 0; i < queStack.length; ++i) {
    recFunc[i] = queStack[i];
    // loop through again for recursion
    for (let j = 1; j < i; ++j) {
      recFunc[i] =
        (recFunc[i] - ((recFunc[j] * queStack[i - j]) % divMod)) % divMod;
    }
  }
  // return recFunc with modulo applied to it
  return (recFunc[m] + divMod) % divMod;
}

console.log(legoBlocks(2, 2));
// answer accepted by hackerrank
