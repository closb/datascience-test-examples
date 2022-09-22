function minNumberOfSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      count++;
      i--;
    }
  }
  return count;
}
console.log(minNumberOfSwaps([4, 3, 1, 2]));
console.log(minNumberOfSwaps([2, 3, 4, 1, 5]));
console.log(minNumberOfSwaps([1, 3, 5, 2, 4, 6, 7]));
console.log(minNumberOfSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minNumberOfSwaps([4, 3, 1, 2]));
console.log(minNumberOfSwaps([2, 3, 4, 1, 5]));
console.log(minNumberOfSwaps([1, 3, 5, 2, 4, 6, 7]));
console.log(minNumberOfSwaps([7, 1, 3, 2, 4, 5, 6]));
