/**
 *  Given the values of n and m , determine which player will win. 
 *  If the first player wins, return 1 Otherwise, return 2
 */

// Example

    /**
     *  n = 2
     *  m = 6
     * 
     *  There are 2 towers each 6 units tall. Player 1 has a choice of two
     *  moves;
     *  1. Remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0
     *  2. Remove 5 pieces to leave 1
     *  
     *  Let player 1 remove 3. Now the towers are 3 and 6 units tall. 
     *  
     *  Player 2 matches the move. Now the towers are both 3 units tall.
     *  
     *  Now player 1 has only 1 move. 
     * 
     *  Player 1 removes 2 pieces to leave 1. Towers are 1 and 2 units tall.
     * 
     *  Player 2 matches again. Towers are both 1 unit tall.
     * 
     *  Player 1 has no move and loses. Return 2.
     * 
     */

// Function Description

    /**
     * Complete the towerBreakers function in the editor below.
     * 
     *  towerBreakers has the following parameters;
     *  
     *  int n - the number of towers
     *  int m - the height of each tower
     * 
     *  Returns
     * 
     *  int - the winner of the game 
     * 
     */

// Input Format

    /** 
     *  The first line contains a single integer t, the number of test cases.
     *  Each of the next t lines describes a test case in the form of 2 
     *  space-separated integers, n and m
     */

// Constraints

    /**
     *  1 <= t <= 100
     *  1 <= n, m <= 10^6
     */

// Sample Input

    /**
     *  2