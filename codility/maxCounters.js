// Language javascript
// Path maxCounters.js
// write function that given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

function maxCounters(N,A) {
    let counters = new Array(N).fill(0);
    let max = 0;
    let min = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
        counters[A[i] - 1] = Math.max(counters[A[i] - 1], min) + 1;
        max = Math.max(max, counters[A[i] - 1]);
        } else {
        min = max;
        }
    }
    for (let i = 0; i < counters.length; i++) {
        counters[i] = Math.max(counters[i], min);
    }
    return counters;
}