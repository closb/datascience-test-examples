// A queue is an abstract date type that maintains the order in which elements were added to it, allowing the olderst elements to be removed from the front and new elementes to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.

// In this challenge, you must first implement a queue using two stacks. Then process queries, where each query is one of the following 3 types:

// 1 x: Enqueue element into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

// Input Format

// The first line contains a single integer, q, denoting the number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in the problem statement above. All three queries start with an integer denoting the query type, but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued.

// Constraints

// 1 <= q <= 10^5
// 1 <= type <= 3
// 1 <= |x| <= 10^9
// It is guaranteed that a valid answer always exists for each query of type 3.

// Output Format

// For each query of type 3, print the value of the element at the front of the queue on a new line.

// Sample Input

// STDIN   Function
// -----   --------
// 10      q = 10
// 1 42    query = [1, 42]
// 2       query = [2]
// 1 14    query = [1, 14]
// 3       query = [3]
// 1 28    query = [1, 28]
// 3       query = [3]
// 1 60    query = [1, 60]
// 1 78    query = [1, 78]
// 2       query = [2]
// 2       query = [2]

// Sample Output

// 14
// 14

// Explanation

// Perform the following sequence of actions

// Enqueue 42; queue = [42].
// Dequeue the value at the head of the queue, 42; queue = [].
// Enqueue 14; queue = [14].
// Print the value at the head of the queue, 14; queue = [14].
// Enqueue 28; queue = [14, 28].
// Print the value at the head of the queue, 14; queue = [14, 28].
// Enqueue 60; queue = [14, 28, 60].
// Enqueue 78; queue = [14, 28, 60, 78].
// Dequeue the value at the head of the queue, 14; queue = [28, 60, 78].
// Dequeue the value at the head of the queue, 28; queue = [60, 78].

// Solution

function processData(input) {
  // create enque and deque functions
  function enqueue(x) {
    stack1.push(x);
  }
  function dequeue() {
    if (stack2.length === 0) {
      while (stack1.length > 0) {
        stack2.push(stack1.pop());
      }
    }
    return stack2.pop();
  }
  // split input into array of queries
  var queries = input.split('');
  // create two stacks
  var stack1 = [];
  var stack2 = [];
  // iterate through queries
  for (var i = 0; i < queries.length; i++) {
    // if query is 1, enqueue
    if (queries[i] === 1) {
      enqueue(queries[i + 1]);
    }
    // if query is 2, dequeue
    if (queries[i] === 2) {
      dequeue();
    }
    // if query is 3, print
    if (queries[i] === 3) {
      console.log(stack1[0]);
    }
  }
}
console.log(processData('10 1 42 2 1 14 3 1 28 3 1 60 1 78 2 2'));

// Language: javascript
// Path: hackerrank/queUsingTwoStacks.js
// A queue is an abstract date type that maintains the order in which elements were added to it, allowing the olderst elements to be removed from the front and new elementes to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.

// In this challenge, you must first implement a queue using two stacks. Then process queries, where each query is one of the following 3 types:

// 1 x: Enqueue element into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

// Input Format

// The first line contains a single integer, q, denoting the number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in the problem statement above. All three queries start with an integer denoting the query type, but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued.

// Constraints

// It is guaranteed that a valid answer always exists for each query of type 3.

// Output Format

// For each query of type 3, print the value of the element at the front of the queue on a new line.

// Sample Input

// STDIN   Function
// -----   --------
// 10      q = 10

// 1 42    query = [1, 42]
// 2       query = [2]
// 1 14    query = [1, 14]

// 3       query = [3]
// 1 28    query = [1, 28]
// 3       query = [3]
// 1 60    query = [1, 60]
// 1 78    query = [1, 78]
// 2       query = [2]
// 2       query = [2]

// Sample Output

// 14
// 14

// Explanation

// Perform the following sequence of actions

// Enqueue 42; queue = [42].
// Dequeue the value at the head of the queue, 42; queue = [].
// Enqueue 14; queue = [14].
// Print the value at the head of the queue, 14; queue = [14].
// Enqueue 28; queue = [14, 28].
// Print the value at the head of the queue, 14; queue = [14, 28].
// Enqueue 60; queue = [14, 28, 60].
// Enqueue 78; queue = [14, 28, 60, 78].
// Dequeue the value at the head of the queue, 14; queue = [28, 60, 78].
// Dequeue the value at the head of the queue, 28; queue = [60, 78].

// Solution
function processData(input) {
  //Enter your code here

  que = [];

  var stringArr = input.split('\n');
  for (let i = 1; i < stringArr.length; i++) {
    var subInstr = stringArr[i].split(' ');

    if (subInstr[0] == 1) {
      que.push(subInstr[1]);
    } else if (subInstr[0] == 2) {
      que.shift();
    } else {
      console.log(que[0]);
    }
  }
}

console.log(processData('10 1 42 2 1 14 3 1 28 3 1 60 1 78 2 2'));

// answer accepted by hackerrank
