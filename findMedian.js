// find median that has the following parameter(s):

// int arr[n]: an array of integers

// Returns

// int: the median of the array

// Input Format

// The first line contains the integer n, the number of elements in the array arr.

// The second line contains n space-separated integers arr[i].

// Constraints

// 1 <= n <= 1000000

// 0 <= arr[i] <= 10^9

// Output Format

// Output the median of the array.

// Sample Input 0

// 6
// 0 1 2 4 6 5

// Sample Output 0

// 3

// Explanation 0

// The sorted array arr = [0, 1, 2, 4, 5, 6]. It's middle element is at arr[3] and the median is 3.

// Sample Input 1

// 7

// 0 1 2 4 6 5 3

// Sample Output 1

// 3

// Explanation 1

// The sorted array arr = [0, 1, 2, 3, 4, 5, 6]. It's middle element is at arr[3] and the median is 3.



// Complete the findMedian function below.

function findMedian(arr) {

    // sort the array
    arr.sort((a, b) => a - b);

    // find the middle index
    const middleIndex = Math.floor(arr.length / 2);

    // return the middle index
    return arr[middleIndex];

}



    
        arr.sort(function(a, b){return a-b});
    
        return arr[Math.floor(arr.length/2)];
    
    }




