// write function that given a non-empty array A of N integers, returns the maximal answer that can be achieved on the board represented by array A.

/**
 * @param {any[]} A
 *
 * @returns {number}
 *
 *
 */

function numberSolitaire(A) {
  var answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer ^= A[i];
  }
  return answer;
}
