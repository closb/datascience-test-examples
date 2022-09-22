// given a string s consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, and an array of ending indices endIndices, determine the number of items in closed compartments within the substring between the startIndices and endIndices.

// an item is represented as an asterisk *
// a compartment is represented as a pair of pipes | that may or may not have items between them (| = ascii 124)

// Example
// s = '|**|*|*'
// startIndices = [1, 1]
// endIndices = [5, 6]

// The string has a total of 2 closed compartments, one with 2 items and one with 1 item. For the first pair of indices, (1, 5), the substring is '|**|*'. There are 2 items in a compartment.

// For the second pair of indices, (1, 6), the substring is '|**|*|' and there 2 + 1 = 3 items in compartments.

// Both of the answers are returned in an array, [2, 3].

// Function Description
// Complete the numberOfItems function in the editor below.

// numberOfItems has the following parameters:
// string s: a string to evaluate
// startIndices: an integer array, the starting indices
// endIndices: an integer array, the ending indices

// Constraints
// 1 <= n <= 10^5
// 1 <= startIndices[i] <= endIndices[i] <= n
// Each character of s is either * or |.

// Sample Case 0
// Sample Input for Custom Testing
// STDIN Function
// ----- --------
// *|* -> s = "*|*"
// 1 -> startIndices[] size n = 1
// 1 -> startIndices = [1]
// 1 -> endIndices[] size n = 1
// 3 -> endIndices = [3]

// Sample Output
// 0

// Explanation
// s = *|*|
// n =1
// startIndices = [1]
// n =1
// endIndices = [3]
// The substring from index 1 to 3 is '|*|'. There is no compartments in this string.

/**
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY
 * The function accepts following paraments:
 * 1. STRING s
 * 2. INTEGER_ARRAY startIndices
 * 3. INTEGER_ARRAY endIndices
 *
 */

/**
 *
 * @param {string} s
 * @param {arr} startIndices
 * @param {arr} endIndices
 * @returns
 */

// complete the numberOfItems function below. The function must return an integer array that contains the resuts for each startIndices[i] and endIndices[i] pairs.

// numberOfItems has three parameters:
// s: a string to evaluate
// startIndices: an integer array, the starting indices
// endIndices: an integer array, the ending indices

// Constraints
// 1 <= n <= 10^5
// 1 <= startIndices[i] <= endIndices[i] <= n
// Each character of s is either * or |

// Solution

function numberOfItems(s, startIndices, endIndices) {
  // Write your code here
  let result = [];
  let count = 0;
  let open = false;
  for (let i = 0; i < startIndices.length; i++) {
    let start = startIndices[i];
    let end = endIndices[i];
    for (let j = start - 1; j < end; j++) {
      if (s[j] === '*') {
        count++;
      } else if (s[j] === '|') {
        if (open) {
          open = false;
          result.push(count);
          count = 0;
        } else {
          open = true;
        }
      }
    }
  }
  return result;
}

// Test
console.log(numberOfItems('*|*|', [1], [3])); // 0
console.log(numberOfItems('*|*|*|', [1], [7])); // 2
console.log(numberOfItems('*|*|*|', [1, 1], [7, 3])); // 2, 0
console.log(numberOfItems('*|*|*|', [1, 1, 1], [7, 3, 5])); // 2, 0, 1
console.log(numberOfItems('*|*|*|', [1, 1, 1, 1], [7, 3, 5, 7])); // 2, 0, 1, 2
console.log(numberOfItems('*|*|*|', [1, 1, 1, 1, 1], [7, 3, 5, 7, 9])); // 2, 0, 1, 2, 3