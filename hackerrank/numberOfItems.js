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
 * @param {*} s 
 * @param {*} startIndices 
 * @param {*} endIndices 
 * @returns 
 */


function numberItems(s, startIndices, endIndices) {
    // Write your code here
    let result = [];
    for (let i = 0; i < startIndices.length; i++) {
        let count = 0;
        let idx = startIndices[i];
        while (idx <= endIndices[i]) {
            if (s[idx] === 'charCodeAt(124)') {
                count++;
            }
            idx++;
        }
        result.push(count);
    }
    return result;
}

function numberOfItems(s, startIndices, endIndices){
    const numOfItemsArr = [];
    startIndices.forEach((start, index) => {
        const end = endIndices[index];
        const subS = s.substring(start-1, end);
        const items = subS.split('|');
        // skipping first and last items because they are either empty or opened
        const numOfItems = items.slice(1, items.length-1).join('').length;
        numOfItemsArr.push(numOfItems);
    });
    return numOfItemsArr;
}