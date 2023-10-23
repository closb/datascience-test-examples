# INSTRUCTIONS

A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000]

    ``` javascript
    function equiLeader(A) {
    let map = new Map();
    let max = 0;
    let maxKey = -1;
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
        map.set(A[i], map.get(A[i]) + 1);
        } else {
        map.set(A[i], 1);
        }
        if (map.get(A[i]) > max) {
        max = map.get(A[i]);
        maxKey = A[i];
        }
    }
    if (max > A.length / 2) {
        let count = 0;
        let leftCount = 0;
        for (let i = 0; i < A.length; i++) {
        if (A[i] === maxKey) {
            leftCount++;
        }
        if (leftCount > (i + 1) / 2 && (max - leftCount) > (A.length - i - 1) / 2) {
            count++;
        }
        }
        return count;
    }
    return 0;
    }
    ```

## ANALYSIS SUMMARY
