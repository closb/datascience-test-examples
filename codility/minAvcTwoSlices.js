// Language: javascript
// Path: minAvcTwoSlices.js
// write function that given a non-empty array A consisting of N integers, returns the minimal average of any slice containing at least two elements.
function minAvgTwoSlice(A) {
  let min = Infinity;
  let index = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let avg = (A[i] + A[i + 1]) / 2;
    if (avg < min) {
      min = avg;
      index = i;
    }
    if (i < A.length - 2) {
      avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg < min) {
        min = avg;
        index = i;
      }
    }
  }
  return index;
}


// write function 