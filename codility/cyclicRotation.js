// given an array A consisting of N integers and an integer K, returns the array A rotated K times.

/**
 * @param {any[]} A
 * @param {number} K
 */
function cyclicRotation(A, K) {
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}
