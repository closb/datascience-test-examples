
// Language javascript
// Path countDiv.js
/**
 * write a function that given three integers A, B, and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
 * { i : A ≤ i ≤ B, i mod K = 0 }
 * 
 * @param {number} A
 * @param {number} B
 * @param {number} K
 * @returns {number}
 * 
 * @example
 *  
 *  A = 6, B = 11, K = 2, the function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8, and 10.
 * 
 * 
 */

function countDiv(A, B, K) {
    return Math.floor(B / K) - Math.floor((A - 1) / K);
}
