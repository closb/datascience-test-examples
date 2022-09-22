// Consider an undirected graph where each edge is the same weight. Each of the nodes is labeled consecutively 1 from n.

// You will be given a number of queries. For each query you will be given a list of edges describing an undirected graph. After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS). Distances are to be reported in node number order, ascending. If a node is unreachable, print -1 for that node. Each of the edges weighs 6 units of distance.

// Example
// The following graph is represented by the matrix
//  1/start  5
// 2 3
//   4

// n=5 number of nodes
// m=3 number of edges
// edges = [[1,2],[1,3],[3,4]]
// start = 1

// All distances are from the start node.
// 1. Outputs are calculated for the distances to nodes 2 though 5: [6, 6, -1, 12]. Each edge is 6 units, and the unreachable node 5 has the requred return distance of -1.

// Function Description
// Complete the bfs function in the editor below. It must return an array of integers representing distances from the start node to each other node in node ascending order. If a node is unreachable, its distance is -1.

// bfs has the following parameter(s):
// n: the integer number of nodes
// m: the integer number of edges
// edges: a 2D array of start and end nodes for edges
// s: the node to start traversals from

// Returns
// int[n-1]: the distances to each node in node number order, ascending

// Input Format

// The first line contains an integer q, the number of queries. Each of the following q sets of lines has the following format:
// Each line i of the m subsequent lines contains two space-separated integers, u and v, describing an edge connecting node u to node v.
// The last line contains a single integer, s, the index of the starting node.

// Constraints
// 1 <= q <= 10
// 2 <= n <= 1000
// 1 <= m <= n * (n-1) / 2
// 1 <= u, v, s <= n

// Sample Input
// 2
// 4 2
// 1 2
// 1 3
// 1
// 3 1
// 2 3
// 2

// Sample Output
// 6 6 -1
// -1 6

// Explanation
// We perform the following two queries:

// 1. The given graph can be represented as:
//  1/start  4
// 2 3
// where our start node, s = 1, is node 1. The shortest distances from s to the other nodes are one edge to node 3, and an infinite distance to node 4(which is not connected to). We then return an array of distances from node 1 to nodes 2, 3, and 4: [6, 6, -1].

// 2. The given graph can be represented as:
// 1 2/start
//   3
// where our start node, s = 2, is node 2. There is only one edge here, so node 3 is unreachable from node 1. We then return an array of distances from node 2 to nodes 1 and 3: [-1, 6].

// Note: Recall that the actual length of each edge is 6 units, and we print -1 as the distance to any node that's unreachable from s.

// Solution

/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

// Complete the bfs function below.
function bfs(n, m, edges, s) {
  // write your code here
  // create variables for the graph, distance, queue, visited and result
  let graph = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let visited = new Array(n + 1).fill(false);
  let queue = [];
  let distance = new Array(n + 1).fill(0);
  let result = [];
  // loop through the edges and add the edges to the graph
  for (let i = 0; i < edges.length; i++) {
    // add the edges to the graph
    let [u, v] = edges[i];
    graph[u][v] = 6;
    graph[v][u] = 6;
  }
  // add the starting node to the queue
  queue.push(s);
  visited[s] = true;
  while (queue.length > 0) {
    let node = queue.shift();
    // loop through the queue
    for (let i = 1; i <= n; i++) {
      if (graph[node][i] > 0 && !visited[i]) {
        queue.push(i);
        visited[i] = true;
        distance[i] = distance[node] + graph[node][i];
      }
    }
  }
  // loop through the distance array and add the distances to the result array
  for (let i = 1; i <= n; i++) {
    if (i !== s) {
      result.push(distance[i] === 0 ? -1 : distance[i]);
    }
  }
  return result;
}

console.log(
  bfs(
    4,
    2,
    [
      [1, 2],
      [1, 3],
    ],
    1
  )
);
console.log(bfs(3, 1, [[2, 3]], 2));


// answer accepted by hackerrank
