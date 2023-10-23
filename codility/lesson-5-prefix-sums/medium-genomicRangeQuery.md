# INSTRUCTIONS

A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P and Q is an integer within the range [0..N - 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.

``` javascript
    /**
     * @param {string} S
     * @param {number[]} P
     * @param {number[]} Q
     * @returns {number[]}
     */
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


```


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