/**
 *  Given an array of n distinct integers, transform the array 
 *  into a zigzag sequence by permuting the array elements.
 *  A sequnce will be called zig zag sequence if the first
 *  k elements in the sequence are in increasing order and the last
 *  k elements are in decreasing order, where k = (n+1)/2.
 *  You need to find the lexicographically smallest zigzag sequence
 *  of the given array.
 * 
 */

// Example

    /** 
     *  a = [2, 3, 5, 1, 4]
     * 
     *  Now if we permute the array as [1, 4, 5, 3, 2], the 
     *  result is a zigzag sequence.
     *  
     * 
     *   Debug the given function findZigZagSequence to return the appriopriate
     *   zig zag sequence for the given input array.
     * 
     *   Note: You can modify at most three lines in the given code. 
     *   You cannot add or remove lines of code. 
     * 
     *   To restore the original code, click on the icon to the right
     *   of the language selector. 
     * 
     */

// Input Format

    /**
     *   The first line contains t the number of test cases. The first
     *   line of each test case contians an integer n, denoting the number
     *   of the array elements. The next line of the test case 
     *   contains n elements of the array <a href="
     * 
     */

// Constraints

    /**  
     *   1 <= t <= 20
     *   1 <= n <= 10000(n is always odd)
     *   1 <= a[i] <= 10^9
     */

// Output Format

    /** 
     *  For each test cases, printe the elements of the transformed
     *  zig zag sequence in a single line. 
     */

// Solution 

/**
 * 
 *  @param {*} t - Number of test cases
 *  @param {*} n - Number of elements in the array
 *  @param {*} a - Array of elements
 */

 // debug the existing code to successfully execute all the provided test files
function findZigZagSequence(t, n, a) {
    // Write your code here
    // sort the array
    a.sort((a, b) => a - b);
    // create a new array
    let b = [];
    // iterate through the array
    for (let i = 0; i < n; i++) {
        // if i is even, push the element to the front of the array
        if (i % 2 === 0) {
            b.unshift(a[i]);
        }
        // if i is odd, push the element to the end of the array
        if (i % 2 === 1) {
            b.push(a[i]);
        }
    }
    // return the array
    return b;
}

// this must be removed for the test to work
console.log(findZigZagSequence(1, 5, [2, 3, 5, 1, 4]));

function processData(input) {
    //Enter your code here
    // split the input into an array of strings
    let arr = input.split('');
    // remove the first element
    arr.shift();
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // split the string into an array of numbers
        let a = arr[i].split(' ').map(Number);
        // remove the first element
        a.shift();
        // call the function
        console.log(findZigZagSequence(1, a.length, a).join(' '));
    }
}

processData('2, 3, 5, 1, 4');

// test incomplete on hackerrank review discussion page


