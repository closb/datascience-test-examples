// Declare a 2-dimension array, arr of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer, and initialize it to 0

// There are 2 types of queries, given as an array of strings for you to parse:
// Query: 1 x y
// 1. let idx = (x ^ lastAnswer) % n
// 2. append integer y to sequence seq[idx]
// Query: 2 x y
// 1. let idx = (x ^ lastAnswer) % n
// 2. Assign the valie arr[idx][y % size[idx]] to lastAnswer
// 3. Store the new value of the lastAnswer to an answer array

// Note: is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia. is the modulo operator.

// Finally, size(arr[idx]) is the number of elements in arr[idx].

// Function Description

// Complete the dynamicArray function in the editor below. It must return an array of integers where each element is the answer to a query of type 2.

// dynamicArray has the following parameters:
// n - the number of empty arrays to initialize in
// string queries - query strings that contain 3 space-seperated integers

// Returns
// ing[]: the results of each type 2 query in the order they are presented

// Input Format

// The first line contains two space-separated integers, n (the number of empty arrays) and q (the number of queries), respectively.
// Each of the q subsequent lines contains a query in the format defined above, .

// Constraints
// 1 <= n, q <= 10^5
// 0 <= x <= 10^9
// it is guaranteed that query type 2 will never query an empty sequence or index

// Sample Input 0
// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1

// Sample Output 0
// 7
// 3

// Explanation 0
// Initial Values:
//
// n = 2
// lastAnswer = 0
// arr[0] = []
// arr[1] = []
// Query 0: Append 5 to sequence .
// lastAnswer = 0
// arr[0] = [5]
// arr[1] = []
// Query 1: Append 7 to sequence .
// arr[((1 ^ 0) % 2)] = arr[1]
// arr[0] = [5]
// arr[1] = [7]
// lastAnswer = 0
// Query 2: Append 3 to sequence .
// arr[((0 ^ 0) % 2)] = arr[0], lastAnswer = 0
// arr[0] = [5, 3]
// arr[1] = [7]
// Query 3: Assign the value at index 0 of sequence to lastAnswer, print lastAnswer.
// 0 of arr[((1 ^ 0) % 2)] = arr[1][0] = 7 , lastAnswer = 7
// arr[0] = [5, 3]
// arr[1] = [7]

// Query 4: Assign the value at index 1 of sequence to lastAnswer, print lastAnswer.
// 1 of arr[((1 ^ 7) % 2)] = arr[1][1 % 1] = 7, lastAnswer = 7
// arr[0] = [5, 3]
// arr[1] = [7]

// Solution
function dynamicArray(n, queries) {
    let arr = [...Array(n)].map(() => []), lastAnswer = 0, answer = [];
    queries.forEach(([type, x, y]) => {
        let idx = (x ^ lastAnswer) % n;
        if (type === 1) {
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            answer.push(lastAnswer);
        }
    })
    return answer;
}
console.log(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]));

// answer accepted by hackerrank
