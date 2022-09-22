// Amazon fresh is running a new grocery store designed from the ground up to offer a seamless grocery shopping experience to consumers. As part of a stock clearance exercise at the store, given many piles of fresh products, follow the rules given below to stack the products in an orderly manner. 

// There are a total n piles of products.
// The number of products in each pile is represented by the array numProducts.
// Select any subarray from the array of numProducts and pick up products from that subarray such that the number of products you pick from the ith pile is stricly less than the number of products you pich from the (i+1)th pile for all indices i in the subarray.

// Return the maximum number of products you can pick up.

// Example 1:

// The numbers of products in each pile are numProducts = [7, 4, 5, 2, 6, 5]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,3) and pick products [3,4,5] respective from each index, which is 12 producs. Note that we are forced to pick only 3 products from index 1 as the maximum number of products we can pick from index 2 is 4 and we need to make sure it is greater than the number of products picked from index 1.
// Choose subarray from indices(3,6) and pick products [1,2,4,5] respectively from each index, which is 12 producsts. Similar to the above case, we are forced to pick only 1 product from index 3 as the number of products at index 4 is only 2.

// choose subarry from indices(3,5) and pick products[1,2,6] respectively from each index, which is 9 products. 

// Choose subarray from indices(1,1) and pick all 7 products 

// The maximum number of products is 12.

// Function Description

// // Complete the function findMaxProducs

/**
 * @param {number[]} numProducts
 * @return {number}
 * 
 */


function findMaxProducts(products){
      // Write your code here
  // create variables to hold the max number of products and the numProducts number of products
  let maxProducts = products[i] - 1;
  let numProducts = products;

  // iterate through the array
  for (let i = 0; i < products.length; i++) {
    // check if the numProducts number is greater than the previous number
    if (products[i] > products[i - 1]) {
      // increment the numProducts number of products
      numProducts++;
    } else {
      // set the numProducts number of products to 1
      numProducts = 1;
    }
    // check if the numProducts number of products is greater than the max number of products
    if (numProducts > maxProducts) {
      // set the max number of products to the numProducts number of products
      maxProducts = numProducts;
    }
  }
  // return the max number of products
  return maxProducts ;
}
console.log(findMaxProducts([7, 4, 5, 2, 6, 5])); 

// Example 2:

// The numbers of products in each pile are numProducts = [1, 2, 3, 4, 5, 6]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,6) and pick products [1,2,3,4,5,6] respective from each index, which is 21 producs.

// Choose subarray from indices(1,5) and pick products [1,2,3,4,5] respective from each index, which is 15 producs.

// Choose subarray from indices(1,4) and pick products [1,2,3,4] respective from each index, which is 10 producs.

// Choose subarray from indices(1,3) and pick products [1,2,3] respective from each index, which is 6 producs.

// Choose subarray from indices(1,2) and pick products [1,2] respective from each index, which is 3 producs.

// Choose subarray from indices(1,1) and pick all 1 products

// The maximum number of products is 21.

// Example 3:

// The numbers of products in each pile are numProducts = [1, 1, 1, 1, 1, 1]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,6) and pick products [1,1,1,1,1,1] respective from each index, which is 6 producs.

// Choose subarray from indices(1,5) and pick products [1,1,1,1,1] respective from each index, which is 5 producs.

// Choose subarray from indices(1,4) and pick products [1,1,1,1] respective from each index, which is 4 producs.

// Choose subarray from indices(1,3) and pick products [1,1,1] respective from each index, which is 3 producs.

// Choose subarray from indices(1,2) and pick products [1,1] respective from each index, which is 2 producs.

// Choose subarray from indices(1,1) and pick all 1 products

// The maximum number of products is 6.

// Example 4:

// The numbers of products in each pile are numProducts = [1, 2, 1, 2, 1, 2]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,6) and pick products [1,2,1,2,1,2] respective from each index, which is 12 producs.

// Choose subarray from indices(1,5) and pick products [1,2,1,2,1] respective from each index, which is 9 producs.

// Choose subarray from indices(1,4) and pick products [1,2,1,2] respective from each index, which is 8 producs.

// Choose subarray from indices(1,3) and pick products [1,2,1] respective from each index, which is 4 producs.

// Choose subarray from indices(1,2) and pick products [1,2] respective from each index, which is 3 producs.

// Choose subarray from indices(1,1) and pick all 1 products

// The maximum number of products is 12.

// Example 5:

// The numbers of products in each pile are numProducts = [1, 2, 3, 2, 1, 2]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,6) and pick products [1,2,3,2,1,2] respective from each index, which is 12 producs.

// Choose subarray from indices(1,5) and pick products [1,2,3,2,1] respective from each index, which is 9 producs.

// Choose subarray from indices(1,4) and pick products [1,2,3,2] respective from each index, which is 8 producs.

// Choose subarray from indices(1,3) and pick products [1,2,3] respective from each index, which is 6 producs.

// Choose subarray from indices(1,2) and pick products [1,2] respective from each index, which is 3 producs.

// Choose subarray from indices(1,1) and pick all 1 products

// The maximum number of products is 12.

// Example 6:

// The numbers of products in each pile are numProducts = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]

// These are some of ways strictly increasing subarrays can be chose (1-based index):

// Choose subarray from indices(1,11) and pick products [1,2,3,4,5,6,5,4,3,2,1] respective from each index, which is 66 producs.

// Choose subarray from indices(1,10) and pick products [1,2,3,4,5,6,5,4,3,2] respective from each index, which is 55 producs.

// Choose subarray from indices(1,9) and pick products [1,2,3,4,5,6,5,4,3] respective from each index, which is 45 producs.

// Choose subarray from indices(1,8) and pick products [1,2,3,4,5,6,5,4] respective from each index, which is 36 producs.

// Choose subarray from indices(1,7) and pick products [1,2,3,4,5,6,5] respective from each index, which is 28 producs.

// Choose subarray from indices(1,6) and pick products [1,2,3,4,5,6] respective from each index, which is 21 producs.

// Choose subarray from indices(1,5) and pick products [1,2,3,4,5] respective from each index, which is 15 producs.

// Choose subarray from indices(1,4) and pick products [1,2,3,4] respective from each index, which is 10 producs.

// Choose subarray from indices(1,3) and pick products [1,2,3] respective from each index, which is 6 producs.

// Choose subarray from indices(1,2) and pick products [1,2] respective from each index, which is 3 producs.

// Choose subarray from indices(1,1) and pick all 1 products

// The maximum number of products is 66.

// Constraints:

// 1 <= numProducts.length <= 10^5

// 1 <= numProducts[i] <= 10^5

// numProducts[i] is guaranteed to be strictly increasing.

// Related Topics Array

// 👍 0 👎 0

// Java

// 1ms

// 39.9MB

// O(N)

// O(1)

// Solution:

// 1. Find the first index of the first number that is smaller than the previous number.

// 2. Find the last index of the last number that is smaller than the next number.

// 3. The maximum number of products is the product of the numbers between the two indices.

// 4. If the first index is 0, the maximum number of products is the product of the numbers between the first index and the last index.

// 5. If the last index is the length of the array minus 1, the maximum number of products is the product of the numbers between the first index and the last index.

// 6. If the first index is not 0 and the last index is not the length of the array minus 1, the maximum number of products is the maximum of the product of the numbers between the first index and the last index and the product of the numbers between the first index and the previous index and the product of the numbers between the next index and the last index.

// 7. Return the maximum number of products.

// Complexity:

// Time: O(N)

// Space: O(1)

class Solution {

public int maxProduct(int[] numProducts) {

int firstIndex = 0;

int lastIndex = numProducts.length - 1;

for (int i = 1; i < numProducts.length; i++) {

if (numProducts[i] < numProducts[i - 1]) {

firstIndex = i;

break;

}

}

for (int i = numProducts.length - 2; i >= 0; i--) {

if (numProducts[i] < numProducts[i + 1]) {

lastIndex = i;

break;

}

}

long max = 1;

for (int i = firstIndex; i <= lastIndex; i++) {

max = (max * numProducts[i]) % 1000000007;

}

if (firstIndex == 0) {

return (int) max;

}

if (lastIndex == numProducts.length - 1) {

return (int) max;

}

long max1 = 1;

for (int i = firstIndex; i < numProducts.length; i++) {

max1 = (max1 * numProducts[i]) % 1000000007;

}

long max2 = 1;

for (int i = 0; i <= lastIndex; i++) {

max2 = (max2 * numProducts[i]) % 1000000007;

}

return (int) Math.max(max, Math.max(max1, max2));

}

}

