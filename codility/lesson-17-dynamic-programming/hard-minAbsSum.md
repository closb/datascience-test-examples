# INSTRUCTIONS

``` javascript

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
```
