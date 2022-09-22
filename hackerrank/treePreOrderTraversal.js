// Complete the preOrder funtion in the editor below, which has 1 parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

// Input Format

// Our test code passes the root node of a binary tree to the preOrder function. 

// Constraints

// 1 <= Nodes in the tree <= 500

// Output Format

// Print the tree's preorder traversal as a single line of space-separated values.

// Sample Input

//    1
//     \
//      2
//       \
//        5
//       /  \
//      3    6
//       \
//        4

// Sample Output

// 1 2 5 3 4 6

// Explanation

// The preOrder traversal of the binary tree is printed. 

// Solution

/**
 *
 * @param {*} root
 * @returns
 */
function preOrder(root){
    //let buffer = [];
    if(root){
        //console.log(root.data);
        process.stdout.write(root.data.toString() + " ");
        if(root.left){
            preOrder(root.left);
        }
        if(root.right){
            preOrder(root.right);
        }
    }
}
console.log(preOrder(root));

// answer accepted by hackerrank courtesy of @tacker1