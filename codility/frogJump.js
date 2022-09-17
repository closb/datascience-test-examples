//  write function given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

/**
 * @param {number} X
 * @param {number} Y
 * @param {number} D
 */

function frogJump(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
