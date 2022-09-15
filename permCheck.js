// Language javascript
// Path permCheck.js
// write function that given a non-empty array A of N integers, returns 1 if array A is a permutation and 0 if it is not.

// permutation is a sequence containing each element from 1 to N once, and only once. - laymans terms a copy of the array with no duplicates and no missing numbers

function permCheck(A) {
  // create set
  let set = new Set();
  // loop through set by the arrays length
  for (let i = 0; i < A.length; i++) {
    // add to array by int
    set.add(A[i]);
  }
  // else set size to arrays length && max of elements in the array to equal the array's length ? 1 or zero
  return set.size === A.length && Math.max(...A) === A.length ? 1 : 0;
}
