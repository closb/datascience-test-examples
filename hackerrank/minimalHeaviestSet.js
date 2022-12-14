an amazon fullfillment associate has a set of tiems that need to be packed into two boxes. Given an integer array of the item weights(arr) to be packed, divide the item weights into two subsets A and B for packing into the associated boxes , while respecting the following conditions

The intersection of A and B is null
The union of A and B is equal to original array
The number of elements in subset A is minimal
The sum of A's weights is greater than the sum of B's weight

Return the subset A in increasing order where the sum of A's weight is greater than the sum of B's weight. If more than one subset A exist return the one with the maximal total weight.

Example

n = 5
arr = [3, 7, 5, 6, 2]

The 2 subsets in arr that satisfy the conditions for A are [5,7] and [6,7]:

A is minimal (size 2)
Sum(A) = (5 + 7) = 12 > Sum(B) = (2 +3 + 6) = 11
Sum(A) = (6 + 7) = 13 > Sum(B) = (2 + 3 + 5) = 10

The intersection of A and B is null and their union is equal to arr

The subset A where the sum of its weight is maximal is [6,7]

Function Description

Complete the minimalHeaviestSetA

minimalHeaviestSetA has the following parameter(s):

int arr[n]: an array of integers

Returns:

int[]: an array of integers that represent the value of subset A

function minimalHeaviestSetA(arr) {
    // Write your code here
    let sum = 0;
    let sumA = 0;
    let sumB = 0;
    let min = arr.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        sumA += arr[i];
        sumB = sum - sumA;
        if (sumA > sumB) {
            if (arr.length - i < min) {
                min = arr.length - i;
                result = arr.slice(i);
            }
        }
    }
    return result;
}
