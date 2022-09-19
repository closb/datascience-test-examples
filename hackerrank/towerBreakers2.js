// initiall n towers
// each tower has height of m
// players move in alternat turns
// in each turn a player can choose a tower of height x and reduce its height to y where 1 <= y < x evenly divides x
// if current player is unable to make a move they lose the game

// given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2

// Example

// n = 2
// m = 6

// There are 2 towers each 6 units tall. Player 1 has a choice of two moves;
// - remove 3  pieces from the tower to leave 3 as 6 modulo 3 = 0
// - remove 5 pieces to leave 1

// Let player 1 remove 3. Now the towers are 3 and 6 units tall

// Player 2 matches the move. Now the towers are both 3 units tall

// Now player 1 has only one move
// Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall
// Player 2 matches again towers are both 1 unit tall
// Player 1 has no moves and loses, return 2

// Function Description

/**
 *  towerBreakers has the following parameter(s):
 * @param {integer} n - number of towers
 * @param {integer} m - height of each tower
 * @returns {integer} - winner of the game
 *
 */

// Input Format

/**
 *  First line contains a single integer t the number of test cases
 *  Each of the next t lines describes a test case in the form of
 *  2 space seperated integers n and m
 */

// Constraints

/**
 *  1 <= t <= 100
 *  1 <= n, m <= 10^6
 */

// Sample Input

/**
 *  STDIN           Function
 * -----           --------
 *  2               t = 2
 *  2 2            n = 2, m = 2
 *  1 4            n = 1, m = 4
 *
 */

// Sample Output

/**
 *  2
 *  1
 */

// Explanation

/**
 *  Well refer to player 1 as P1 and Player 2 as P2
 *
 *  In the first test case, P1 chooses one of the two towers and reduces
 *  it to 1.
 *
 *  Then P2 reduces the remaining tower to 1. As both towers have a
 *  height of 1, P1 cannot make a move so P2 wins
 */

/**
 *  In the second test case there is only one tower of height 4. P1 can
 *  reduce it to a height of 1 or 2. P1 chooses 1 as both players choose
 *  optimally.
 *
 *  Because P2 has no possible moves, P1 wins
 *
 */

// Solution

function towerBreakers(n, m) {
  if (m == 1 || n % 2 == 0) {
    return 2;
  } else {
    return 1;
  }
}

console.log(towerBreakers(1, 2));
