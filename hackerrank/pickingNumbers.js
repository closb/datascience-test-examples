// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// Example

// a = [1,1,2,2,4,4,5,5,5]

// There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers

// Returns

// int: the length of the longest subarray that meets the criterion

// Input Format

// The first line contains a single integer n, the size of the array a.
// The second line contains n space-separated integers a[i].

// Constraints

// 2 <= n <= 100
// 0 < a[i] < 100
// The answer will be >= 2.

// Sample Input 0

// 6
// 4 6 5 3 3 1

// Sample Output 0

// 3

// Explanation 0

// We choose the following multiset of integers from the array: {4,3,3}. Each pair in the multiset has an absolute difference <= 1 (i.e., |4-3| = 1 and |3-3| = 0), so we print the number of chosen integers, 3, as our answer.

// Sample Input 1

// 6
// 1 2 2 3 1 2

// Sample Output 1

// 5

// Explanation 1

// We choose the following multiset of integers from the array: {1,2,2,1,2}. Each pair in the multiset has an absolute difference <= 1 (i.e., |1-2| = 1, |1-1| = 0, and |2-2| = 0), so we print the number of chosen integers, 5, as our answer.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
}, 
process.stdin.on('end', function()) {
    inputString = inputString.split('\n');

    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
 * 
 * @param {int} a - array of integers
 * @returns {int}
 * 
 */

// function to pick the numbers
function pickingNumbers(a) {
    // create a variable to hold the max length
    let max = 0;
    // loop through the array
    for (let i = 0; i < a.length; i++) {
        // create a variable to hold the current length
        let count = 0;
        // loop through the array again
        for (let j = 0; j < a.length; j++) {
            // check if the absolute difference between the two numbers is less than or equal to 1
            if (a[i] - a[j] <= 1 && a[i] - a[j] >= 0) {
                // increment the count
                count++;
            }
        }
        // check if the count is greater than the max
        if (count > max) {
            // set the max to the count
            max = count;
        }
    }
    // return the max
    return max;
}

// test the function by using console.log
console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));

// function to meet the requirements of the challenge
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    // read the number of elements in the array
    const n = parseInt(readLine().trim(), 10);
    // read the array
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    // call the function
    const result = pickingNumbers(a);
    // write the result to the output file
    ws.write(result + '\n');
    // close the output file
    ws.end();
}



