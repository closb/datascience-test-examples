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