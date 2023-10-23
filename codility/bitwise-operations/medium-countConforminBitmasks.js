/**
 * Consider unsigned 30-bit integers, i.e all integers B such that 0 ≤ B < 2^30.
 * 
 * We say that integer A conforms to integer B if, in all positions where B has bits set to 1, A has  corresponding bits set to 1.
 * 
 * For example:
 * 
 *  -   00 000 1111 0111 1101 1110 0000 1111(BIN) = 16, 244,239 conforms to
 *      00 0000 1100 0110 1101 1110 0000 0001(BIN) = 13,032,961, but
        11 0000 1101 0111 0000 1010 0000 0101(BIN) = 819,399,173 does not conform to
        00 0000 1001 0110 0011 0011 0000 1111(BIN) = 9,843,471.
    
    Write a function:

        function solution(A, B, C);

    that, given three unsigned 30-bit integers A, B and C, returns the number of unsigned 30-bit integers conforming to at least one of the given integers.

    For example, for integers:

        A = 11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727,
        B = 11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631, and
        C = 11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679,
    
    the function should return 8, since there are 8 unsigned 30-bit integers conforming to A, B or C, namely:

        11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631,
        11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679,
        11 1111 1111 1111 1111 1111 0111 1111(BIN) = 1,073,741,695,
        11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727,
        11 1111 1111 1111 1111 1111 1011 1111(BIN) = 1,073,741,759,
        11 1111 1111 1111 1111 1111 1101 1111(BIN) = 1,073,741,791,
        11 1111 1111 1111 1111 1111 1110 1111(BIN) = 1,073,741,807,
        11 1111 1111 1111 1111 1111 1111 1111(BIN) = 1,073,741,823.
        
    Write an efficient algorithm for the following assumptions:

        A, B and C are integers within the range [0..1,073,741,823].
 * 
 */

/**
 * Counts the number of bits that are set to 1 in at least one of the given integers.
 * @param {number} A - The first integer.
 * @param {number} B - The second integer.
 * @param {number} C - The third integer.
 * @returns {number} The number of bits that are set to 1 in at least one of the given integers.
 */


function countConformingBitmasks(A, B, C) {
    const min = 0;
    const max = 1073741823;
    const range = max - min;

    let count = 0;
    for (let i = 0; i < range.length; i++) {
        let currentBitmask = range[i];
        let isConforming = true;
        for (let j = 0; j < currentBitmask.length; j++) {
            if (currentBitmask[j] !== (i + 1) % 2) {
                isConforming = false;
                break;
            }
        }
        if (isConforming) {
            count++;
        }
    }
    return count;
}

function countConformingBitmasks(n) {
    // Initialize the count variable.
    let count = 0;
  
    // Iterate over all possible bitmasks.
    for (let i = 0; i < (1 << n); i++) {
      // Check if the bitmask is conforming.
      let isConforming = true;
      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) === 0 && (i & (1 << (j + 1))) !== 0) {
          isConforming = false;
          break;
        }
      }
  
      // If the bitmask is conforming, increment the count.
      if (isConforming) {
        count++;
      }
    }
  
    // Return the count.
    return count;
  }
  