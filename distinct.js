// Language: javascript
// Path: permCheck.js
// write function that given an A consisting of N integers returns the number of distinct values in array A.

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function distinct(A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  return set.size;
}