// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

// Example

// The person's budget is b = 60 .
// Three types of keyboards cost keyboards = [40, 50, 60] .
// Two USB drives cost drives = [5, 8, 12] .
// The person can buy a 40 keyboard + 12 USB drive = 52 , or a 50 keyboard + 8 USB drive = 58 .
// Choose the latter as the more expensive option and return 58 .

// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices

// int drives[m]: the drive prices

// int b: the budget

// Returns

// int: the maximum that can be spent, or -1 if it is not possible to buy both items

// Input Format

// The first line contains three space-separated integers b, n, and m, the budget, the number of keyboard models and the number of USB drive models.

// The second line contains n space-separated integers keyboards[i], the prices of each keyboard model.

// The third line contains m space-separated integers drives, the prices of the USB drives.

// Constraints
// 1 <= n, m <= 1000
// 1 <= b <= 10^6
// The price of each item is in the inclusive range [1, 10^6].

// Sample Input 0

// 10 2 3
// 3 1
// 5 2 8

// Sample Output 0

// 9

// Explanation 0

// The person can buy the 2nd keyboard and the 3rd USB drive for a total cost of 8 + 1 = 9 .

// Sample Input 1

// 5 1 1
// 4
// 5

// Sample Output 1

// -1

// Explanation 1

// There is no way to buy one keyboard and one USB drive because 4 + 5 > 5 , so return -1 .

// Sample Input 2

// 5 1 1
// 4
// 5

// Sample Output 2

// -1

// Explanation 2

// There is no way to buy one keyboard and one USB drive because 4 + 5 > 5 , so return -1 .

// Solution - Brute Force

/**
 *
 * @param {int} keyboards
 * @param {int} drives
 * @param {int} b
 * @returns
 */

function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > max) {
        max = keyboards[i] + drives[j];
      }
    }
  }
  return max;
}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
console.log(getMoneySpent([3, 1, 7], [8, 5, 12], 10));
