// write algorithm given positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
/**
 * @param {{ toString: (arg0: number) => any; }} N
 */
function binaryGap(N) {
  var binary = N.toString(2);
  var max = 0;
  var count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}
