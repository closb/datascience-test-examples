// Language: javascript
// Path: frogRiverOne.js
// write function that given a non-empty array A of N integers, and Integer K, returns the earliest time when the frog can jump to the other side of the river.
function frogJump(X, A) {
  let leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i]);
    if (leaves.size === X) return i;
  }
  return -1;
}
