// Language javascript
// Path genomicRangeQuery.js
// write function that given a non-empty string S consisting of N characters and a non-empty array P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

function solution(S, P, Q) {
  let result = [];
  let A = new Array(S.length + 1).fill(0);
  let C = new Array(S.length + 1).fill(0);
  let G = new Array(S.length + 1).fill(0);
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "A":
        A[i + 1] = A[i] + 1;
        C[i + 1] = C[i];
        G[i + 1] = G[i];
        break;
      case "C":
        A[i + 1] = A[i];
        C[i + 1] = C[i] + 1;
        G[i + 1] = G[i];
        break;
      case "G":
        A[i + 1] = A[i];
        C[i + 1] = C[i];
        G[i + 1] = G[i] + 1;
        break;
      case "T":
        A[i + 1] = A[i];
        C[i + 1] = C[i];
        G[i + 1] = G[i];
        break;
    }
  }
  for (let i = 0; i < P.length; i++) {
    if (A[P[i]] !== A[Q[i] + 1]) {
      result.push(1);
    } else if (C[P[i]] !== C[Q[i] + 1]) {
      result.push(2);
    } else if (G[P[i]] !== G[Q[i] + 1]) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
}

// Compare this snippet from minAvgTwoSlice.js:
// // Language: javascript
// // Path: minAvgTwoSlice.js
// // write function that given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average.
// 
// function minAvgTwoSlice(A) {
//   let min = Infinity;
//   let index = 0;
//   for (let i = 0; i < A.length - 1; i++) {
//     let avg = (A[i] + A[i + 1]) / 2