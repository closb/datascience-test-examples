// 2n * 2n matrix

// reverse any of its rows or colums any time

// maximize the sum of its elements in the n * n submatrix located in the upper left quadrant of the matrix

// Given the original configuration of the q matrices help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the upper left quadrant of the final configuration of each matrix is maximal.

// Example
// matrix = [[1.2], [3,4]]
//  1 2
//  3 4

// it is the 2*2 and we want to maximize the top left quadrant, a 1*1 matrix
// 
// reverse row 1
//  1 2
//  4 3

// and now the reverse column 0:
//  4 2
//  1 3
// the maximal sum is 4 

// Function Description

// Complete the flippingMatrix function in the editor below. 

function flippingMatrix(matrix) {
    // Write your code here
    // create a matrix that is 2n * 2n
    let n = matrix.length / 2;
    let sum = 0;
    // iterate through the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // find the max of the 4 elements
            let max = Math.max(matrix[i][j], matrix[i][2*n-1-j], matrix[2*n-1-i][j], matrix[2*n-1-i][2*n-1-j]);
            // add the max to the sum
            sum += max;
        }
    }
    // return the sum
    return sum;
}

// this must be removed for the test to work
console.log(flippingMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]));

// test accepted on hackerrank
// score 100%
