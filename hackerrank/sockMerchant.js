// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

// Returns

// int: the number of pairs

// Input Format

// The first line contains an integer n, the number of socks represented in ar.
// The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.

// Constraints

// 1 <= n <= 100
// 1 <= ar[i] <= 100 where 0 <= i < n

// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// Sample Output

// 3

// Explanation

// sock.png

// There are three pairs of socks.

// Solution

function sockMerchant(n, ar) {
    // create socks object and variable for pairs
    let socks = {};
    let pairs = 0;
    // loop through array
    for (let i = 0; i < n; i++) {
        // if the current sock is not in the socks object, add it
        if (!socks[ar[i]]) {
            // set the value to 1
            socks[ar[i]] = 1;
        } else {
            // otherwise, increment the value
            socks[ar[i]]++;
        }
    }
    // loop through the socks object
    for (let key in socks) {
        // if the value is greater than 1, add the value divided by 2 to the pairs variable
        pairs += Math.floor(socks[key] / 2);
    }
    // return the pairs variable
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3

// answer accepted by hackerrank



