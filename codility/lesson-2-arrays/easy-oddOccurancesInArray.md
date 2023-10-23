# INSTRUCTIONS

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.

Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.

## SOLUTIONS

``` javascript
/**
 * Returns the value that occurs an odd number of times in the input array.
 * @param {number[]} A - The input array of integers.
 * @returns {number} - The value that occurs an odd number of times in the input array.
 */

// all but one of the values in A occur an even number of times.
function oddOccurancesInArray(A) {
    // initialize result to 0
    var result = 0;
    // iterate over each element in A
    for (let i = 0; i < A.length; i++) {
        // perform XOR operation with result
        result ^= A[i];
    }
    // return result
    return result;
}
```

### EXPLANATION

The function oddOccurancesInArray(A) is designed to find the value that occurs an odd number of times in an array A. This is achieved using the XOR bitwise operator (^).

The function starts by initializing a variable result to 0. It then iterates over each element in the array A using a for loop. For each element, it performs an XOR operation with the current value of result.

The XOR operation has a special property: for any given number x, x ^ x equals 0 and x ^ 0 equals x. This means that for every pair of identical numbers in the array, they will XOR to 0. If a number occurs an odd number of times, it will be left over after all XOR operations, because x ^ 0 equals x.

So, after iterating over all elements in the array, result will hold the value that occurs an odd number of times. This value is then returned by the function.

This function is very efficient, with a time complexity of O(n), where n is the length of the array. It also has a constant space complexity, as it only uses a single variable to store the result.

note: consecutiveElementsDifference.js is a solution to a similar problem, but with a different approach.
