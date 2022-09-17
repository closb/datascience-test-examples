// write a function that, given two arrays A and B consisting of N integers, returns the size of a non-overlapping set containing a maximal number of segments.

/**
 * @param {any[]} A
 * @param {any[]} B
 * @returns {number}
 */

function maxNonOverLappingSegments(A, B) {
  var answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer ^= A[i];
  }
  return answer;
}
