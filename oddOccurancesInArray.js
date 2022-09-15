// write function given an array A consisting of N integers, returns the value of the unpaired element.

/**
 * @param {any[]} A
 * @returns {any}
 */
function oddOccurancesInArray(A) {
  var result = 0;
  for (let i = 0; i < A.length; i++) {
    result ^= A[i];
  }
  return result;
}

function oddOccurancesInArray(A) {
  var results = 0;
  for (let i = 0; i < A.length; i++) {
    results ^= A[i];
  }
  return results;
}

function oddOccurancesInArray(A) {
  var results = 0;
  for (let i = 0; i < A.length; i++) {
    results ^= A[i];
  }
  return results;
}
