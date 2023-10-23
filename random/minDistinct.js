// Language: javascript
// Path: codility/minDistinct.js

/**
 * 
 * @param {*} A 
 * @returns 
 */

function solution(A) {
    // create a variable to hold the distinct values
    let distinct = 0;
    // create an object to hold the values we have seen
    let seen = {};
    // loop through the array
    for (let i = 0; i < A.length; i++) {
        // if the value is not in the object
        if (!seen[A[i]]) {
            // increase the distinct count
            distinct++;
            // add the value to the object
            seen[A[i]] = true;
        }
    }
    // return the distinct count
    return distinct;
}
// test result then remove console.log
console.log(solution([2, 1, 1, 2, 3, 1]));
// answer accepted by codility
// Language: javascript
// Path: codility/minDistinct.js