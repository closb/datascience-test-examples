/**
 * Given five positive integers, find the minimum and maximum values that can 
 * be calculated by summing exactly four of the five integers. Then print the 
 * respective minimum and maximum values as a single line of two 
 * space-separated long integers.
 * 
 * 
 * example 
 * 
 *  arr = [1, 3, 5, 7, 9]
 *  The minimum sum is 1 + 3 + 5 + 7 = 16
 *  The maximum sum is 3 + 5 + 7 + 9 = 24
 *  
 *  therefore
 *  The function prints 16 24
 * 
 */

// Function description
    
    /**
     *
     *  minMaxSum has the following parameter(s):
     *  arr: an array of 5 integers
     * 
     */

// Print 

    /**
     *  Print two space-separated integers on one line: 
     *  the minimum sum and the maximum sum of 4 of 5 elements.
     */

// Input Format

    /**
     * A single line of five space-separated integers.
     * 
     */

// Constraints

    /** 
     * 1 <= arr[i] <= 10^9
     * 
     */

// Output Format

    /**
     *  Print two space-separated long integers denoting the respective
     *  minimum and maximum values that can be calculated by summing
     *  exactly four of the five integers. 
     * 
     *  (The output can be greater than a 32 bit integer.)
     */

// Sample Input

    /**
     * 1 2 3 4 5
     */

// Sample Output

    /**
     * 10 14
     */

// Explanation

    /**
     * Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following
     * sums using four of the five integers:
     *  
     * 
     * If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
     * If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
     * If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
     * If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
     * If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.
     *  
     */

// Hints: Beware of integer overflow! Use 64-bit Integer.

// Solution

'use strict';

/**
 * Complete the miniMaxSum function below.
 * 
 * @param {array} arr - an array of 5 integers
 * 
 */

// Sample input
let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
    // using sort method to sort the array in ascending order
    let newArray = arr.sort();
    let sum = 0;

    // loop through the array
    for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i];
    }
    // print the min and max sums
    let max = sum - newArray[0];
    let min = sum - newArray[newArray.length - 1];

    console.log(min, max);

}

// note that array has been sorted in ascending order 
// therefore the original value of the array has changed
// console.log(arr); // [1, 2, 3, 4, 5]

miniMaxSum(arr);



