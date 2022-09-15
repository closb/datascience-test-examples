// Language javascript
// Path missingInteger.js
// write function that given a non-empty array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

function missingInteger(A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) return i;
  }
}