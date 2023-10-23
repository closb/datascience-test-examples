# INSTRUCTIONS

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

class Solution { public int solution(int X, int Y, int D); }

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30

the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100

//Write an efficient algorithm for the following assumptions:
//X, Y and D are integers within the range [1..1,000,000,000];
//X ≤ Y.

``` javascript

/**
 * Calculates the minimum number of jumps required for a frog to get to the other side of a river.
 * @param {number} X - The starting position of the frog.
 * @param {number} Y - The target position of the frog.
 * @param {number} D - The distance the frog can jump.
 * @returns {number} The minimum number of jumps required for the frog to get to the other side of the river.
 */

function frogJump(X, Y, D) {
    // Calculate the total distance the frog needs to cover.
    return Math.ceil((Y - X) / D);
}
```

**note:** The function uses Math.ceil() to round up to the nearest integer. This ensures that the function returns the correct number of jumps even when the total distance is not a multiple of the jump distance.

**Complexity:**

* Expected worst-case time complexity is O(1);
* Expected worst-case space complexity is O(1).

## EXPLANATION

The function frogJump(X, Y, D) is designed to calculate the minimal number of jumps a frog needs to reach from position X to a position equal to or greater than Y. The frog always jumps a fixed distance, D.

The function works by first calculating the total distance the frog needs to cover, which is (Y - X). It then divides this total distance by the distance the frog can cover in a single jump, D. This gives the exact number of jumps the frog needs to reach its target.

However, since the frog can only jump a fixed distance and it's not always guaranteed that the total distance is a multiple of this jump distance, there might be a remainder in the division. If there is a remainder, it means the frog needs to make an additional jump to cover this remaining distance.

To account for this, the function uses Math.ceil(), which rounds up to the nearest integer. This ensures that the function returns the correct number of jumps even when the total distance is not a multiple of the jump distance.

So, the function returns the minimal number of jumps the frog needs to reach its target.
