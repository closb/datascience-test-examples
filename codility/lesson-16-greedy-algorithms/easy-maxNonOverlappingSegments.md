# INSTRUCTIONS

``` javascript
/**
 * @param {any[]} A
 * @param {any[]} B
 * @returns {number}
 */

function maxNonOverLappingSegments(A, B) {
  var answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer ^= A[i];
  }
  return answer;
}
```
