// Comparison Sorting

    /**
     *  Quicksort usually has a running time of n * log(n), but is there an 
     *  algorithm that can sort even faster? In general, this is not possible. 
     * 
     *  Most sorting algorithms are comparison sorts, i.e. 
     *  they sort a list just by comparing the elements to one another. 
     * 
     *  A comparison sort algorithm cannot beat n * log(n) (worst-case) 
     *  running time, since n * log(n) represents the minimum number 
     *  of comparisons needed to know where to place each element. 
     * 
     */

// Alternative Sorting

    /**
     * 
     *  Another sorting method, the counting sort, does not require comparison.
     * Instead, you create an integer array whose index range covers the entire
     * range of values in your array to sort. Each time a value occurs in the
     * original array, you increment the counter at that index. At the end,
     * run through your counting array, printing the value of each non-zero
     * valued index that number of times.
     * 
     */
   
// Example
    /**
     *  
     * arr = [1,1,3,2,1]
     * 
     * All of the values are in the range [0,3], so create an array of zeroes,
     * result = [0,0,0,0]
     * 
     * The results of each iteration follow:
     * 
     * i arr[i] result
     * 0 1      [0,1,0,0]
     * 1 1      [0,2,0,0]
     * 2 3      [0,2,0,1]
     * 3 2      [0,2,1,1]
     * 4 1      [0,3,1,1]
     * 
     * The frequency array, result, can be printed as 0 3 1 1. These values
     * can be used to create the sorted array as well: [1,1,1,2,3]
     */

// Note
    
    /**
     * For this exercise, always return a frequency array of 100 elements. 
     * The example shows only the first 4 elements the remainder being zeros.
     */

// Challenge

    /**
     *  Given a list of integers, count and output the number of times each
     *  value appears as an array of integers.
     */

// Function Description

    /**
     * Complete the function countingSort in the editor below.
     * 
     * countingSort has the following parameter(s):
     * 
     * int arr[n]: an array of integers
     * 
     * Returns
     * 
     * int[100]: an array of integers representing the frequency of each value
     * 
     * Input Format
     * 
     * The first line contains an integer n, the number of items in arr.
     * 
     * Each of the next n lines contains an integer arr[i] where 0 <= i < n.
     * 
     * Constraints
     * 
     * 0 < n < 100
     * 0 <= arr[i] < 100
     * 
     * Sample Input
     * 
     * 100
     * 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91
     * 
     * Sample Output
     * 
     * 0 2 0 0 0 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0
     * 
     * Explanation
     * 
     * Each of the resulting values result[i] represents the number of times i 
     * appeared in arr.
     * 
     */

// Solution

function countingSort(arr) {
    // create an array of 100 elements
    let result = new Array(100).fill(0);
    // loop through the array
        arr.forEach((element) => {
            // increase the value at the index of the element
        result[element]++;
    });
    // return the result
    return result;
}

// this part has to be removed for the test to work
console.log(countingSort([1,1,3,2,1]));

    