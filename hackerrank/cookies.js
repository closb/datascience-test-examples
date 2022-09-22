// Jesse loves cookers and wants the sweetness of some cookies to be greater than the value k. To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
// sweetess = (1 x Least sweet cookie + 2 x 2nd least sweet cookie).

// This occurs until all the cookies have a sweetness >= k.

// Given the sweetness of a number of cookies determine the minimum number of operations required. If it is not possible return -1.

// Example

// k = 9
// A = [2,7,3,6,4,6]

// The smallest values are 2, 3.

// Remove them then return 2 + 2 x 3 = 8 to the array.
// Now A = [8,7,6,4,6].
// Remove 4, 5 and return 4 + 6 x 2 = 16 to the array.
// Now A = [16,8,7,6].
// Remove 6, 7 and return 6 + 2 x 7 = 20 and A = [20, 16, 8, 7].
// Finally, remove 8, 7 and return 7 + 2 x 8 = 23 to A. Now A = [23, 20, 16].
// All values are >= k = 9 so the process stops after 4 iterations, return 4.

// Function Description

// Complete the cookies function in the editor below. It should return an integer that represents the number of operations required to increase the sweetness of all cookies to be greater than or equal to k.

// cookies has the following parameter(s):

// k: an integer, the threshold value
// A: an array of integers representing the cookie's sweetness

// Returns

// int: the number of iterations require or -1

// Input Format

// The first line has two space-separated integers, n and k, the size of A and the minimum required sweetness, respectively.
// The next line contains n space-separated integers, A[i].

// Constraints

// 1 <= n <= 10^6
// 0 <= k <= 10^9
// 0 <= A[i] <= 10^6

// Sample Input

// STDIN   Function
// -----   --------
// 6 7     A[] size n = 6, k = 7
// 1 2 3 9 10 12  A = [1, 2, 3, 9, 10, 12]

// Sample Output

// 2

// Explanation

// Combine the first two cookies to create a cookie with sweetness = 1 x 1 + 2 x 2 = 5.
// After this operation, the cookers are 3, 5, 9, 10, 12.
// The combine the cookiers with sweetness 3 and sweetness 5, to create a cooking with resulting sweetness = 1 x 3 + 2 x 5 = 13.
// Now the cookies are 9, 10, 12, 13.
// All the cookies have a sweetness >= 7.

// Thus, 2 operations are required to increase the sweetness.

// Solution

/**
 *
 * @param {*} k
 * @param {*} A
 * @returns
 *
 */

function cookies(k, A) {
  let count = 0;
  let heap = new MinHeap(A);
  while (heap.peek() < k && heap.length > 1) {
    let leastSweet = heap.poll();
    let secondLeastSweet = heap.poll();
    let newSweet = leastSweet + 2 * secondLeastSweet;
    heap.add(newSweet);
    count++;
  }
  return heap.peek() >= k ? count : -1;
}

class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.length = arr.length;
    this.buildHeap();
  }
  buildHeap() {
    for (let i = Math.floor(this.length / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }
  siftDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    if (left < this.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }
  siftUp(index) {
    let parent = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      this.siftUp(parent);
    }
  }
  add(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.length - 1);
  }
  poll() {
    let value = this.heap[0];
    this.heap[0] = this.heap[this.length - 1];
    this.length--;
    this.heap.pop();
    this.siftDown(0);
    return value;
  }
  peek() {
    return this.heap[0];
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

// Explanation
