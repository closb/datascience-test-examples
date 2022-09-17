// write a function that given an array A of N integers returns the smallest positive integer (greater than 0) that does not occur in A.

/**
 * @param N is an integer within the range [1..100,000];
 * @param A is an array of integers within the range [−1,000,000..1,000,000];
 *
 * example, given A = [1, 2, 3], the function should return 4.
 * example, given A = [−1, −3], the function should return 1.
 **/

// steps
//  1. sort the array
//  2. set a variable to 1
//  3. loop through the array
//  4. if the current element is equal to the variable, increment the variable
//  5. return the variable

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sortedArr = A.sort((a, b) => a - b);
  let smallestNum = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === smallestNum) {
      smallestNum++;
    }
  }
  return smallestNum;
}
