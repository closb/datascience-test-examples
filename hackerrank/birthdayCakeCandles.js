// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be ale to blow out the tallest of the candles. Count how many candles are tallest. 

// Example

// candles = [4, 4, 1, 3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights

// Returns

// int: the number of candles that are tallest

// Input Format

// The first line contains a single integer, n, the size of candles.
// The second line contains n space-separated integers, where each integer i describes the height of candles[i].

// Constraints
// 1 <= n <= 10^5
// 1 <= candles[i] <= 10^7

// Sample Input 0
// 4
// 3 2 1 3

// Sample Output 0
// 2

// Explanation 0
// Candle heights are [3, 2, 1, 3]. The tallest candles are 3 units, and there are 2 of them.

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(candles) {
    // create a variable to hold the number of tallest candles
    let tallestCandles = 0;
    // create a variable to hold the tallest candle
    let tallest = 0;
    // iterate through the candles
    for (let i = 0; i < candles.length; i++) {
        // if the current candle is taller than the tallest
        if (candles[i] > tallest) {
            // set the tallest to the current candle
            tallest = candles[i];
            // set the number of tallest candles to 1
            tallestCandles = 1;
        // if the current candle is the same height as the tallest
        } else if (candles[i] === tallest) {
            // increment the number of tallest candles
            tallestCandles++;
        }
    }
    // return the number of tallest candles
    return tallestCandles;
}
console.log(birthdayCakeCandles([3, 2, 1, 3])); //

// Answer accepted by HackerRank
