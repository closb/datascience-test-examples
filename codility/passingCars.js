// Language: javascript
// Path: passingCars.js
// write function that given a non-empty array A of N integers, returns the number of pairs of passing cars.

function passingCars(A) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    } else {
      sum += count;
    }
  }
  return sum > 1000000000 ? -1 : sum;
}