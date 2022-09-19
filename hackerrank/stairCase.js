// Staircase detail

// This is a staircase of size n = 4:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer

// Print

// Print a staircase as described above.

// Input Format

// A single integer, n, denoting the size of the staircase.

// Constraints

// 0 < n <= 100.

// Output Format

// Print a staircase of size n using # symbols and spaces.

// Note: The last line must have 0 spaces in it.

// Sample Input

// 6

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.

// Complete the staircase function below.
function staircase(n) {
    // iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // create an empty string for each row
        let row = '';
        // iterate from 1 to n
        for (let j = 1; j <= n; j++) {
            // if j is less than or equal to n - i
            if (j <= n - i) {
                // add a space to the row
                row += ' ';
            } else {
                // add a # to the row
                row += '#';
            }
        }
        // print the row
        console.log(row);
    }
}
console.log(staircase(6));

// answer accepted by HackerRank
