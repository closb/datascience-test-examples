// write function that given an array A of N integers, computes the minimum value of val(A,S) from all possible values of val(A,S) for all possible sequences S of N integers from the set {−1, 1}.

/**
 * @param {any[]} A
 * @returns {number}
 *
 **/

function minAbsSum(A) {
  var answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer ^= A[i];
  }
  return answer;
}
