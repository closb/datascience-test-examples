// a binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
// 1 <= N <= 2147483647

/**
 * @param {{ toString: (arg0: number) => any; }} N
 */
function solution(N) {
    // create variables to hold the binary string, the max binary gap, and the current binary gap
    let binary = N.toString(2);
    let max = 0;
    let count = 0;
    // loop through the binary string to check for gaps
    for (let i = 0; i < binary.length; i++) {
        // when current character is 0, increase the count
        if (binary[i] === '0') {
            count++;
            // when its at 1, check if the count is greater than the max
        } else {
            if (count > max) {
                // it its greater set max to equal count
                max = count;
            }
            // lets reset count to 0 for next iteration
            count = 0;
        }
    }
    // return binary gap as max
    return max;
}
// test result then remove console.log
console.log(solution(1041));

// answer accepted by codility

