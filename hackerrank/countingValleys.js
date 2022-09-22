// input formats

// The first line contains an integer steps, the number of steps in the hike

// The second line contains a single string path, of steps characters that describe the path

// Constraints

// 2 <= steps <= 10^6

// path[i] ∈ {UD}

// Sample Input

// 8
// UDDDUDUU

// Sample Output

// 1

/**
 * @param {number} steps
 * @param {string} path
 * @return {number}
 */

function countingValleys(steps, path) {
  let valleys = 0;
  let level = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == 'U') {
      level++;
    } else {
      level--;
    }
    if (level == 0 && path[i] == 'U') {
      valleys++;
    }
  }
  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
