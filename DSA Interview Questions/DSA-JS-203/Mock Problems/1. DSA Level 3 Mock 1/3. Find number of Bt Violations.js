// Problem Description
// You are given a binary tree. You need to count the number of balanced binary tree violations in the given tree.

// Input format
// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes


// Format of each line (space separated): Parent_node Left_child_node Right_child_node

// Parent_node - Node at this Position on Line 2 is the Node to which we are assigning the Left and Right child here

// Left_child_node - Node at this position on Line 2 is the left child. Specify -1 if there is no Left child.

// Right_child_node - Node at this position on Line 2 is the right child. Specify -1 if there is no Right child.

// image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_LEVEL2_MOCK2_MODULE_ME_DSA_LEVEL2_MOCK2_MODULE_FINDNUMBEROFBTVOILATIONS_image_0.png

// Output format
// Number of violations

// Sample Input 1
// 10

// 7417 7225 94 8253 1406 9114 4643 3036 2097 1214

// 1 2 -1

// 2 3 4

// 3 -1 5

// 4 6 -1

// 5 -1 7

// 6 8 9

// 7 -1 10

// 8 -1 -1

// 9 -1 -1

// 10 -1 -1

// Sample Output 1
// 4

// Explanation 1
// image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_LEVEL2_MOCK2_MODULE_ME_DSA_LEVEL2_MOCK2_MODULE_FINDNUMBEROFBTVOILATIONS_image_1.png

// 1406 level there is balanced binary tree violation

// 94 level there is a balanced binary tree violation

// 8253 level there is balanced binary tree violation

// 7417 level there is balanced binary tree violation
// 4643 is not considered as per the definition of a balanced binary tree - at every node, the difference of height of left subtree and height of right subtree should not exceed more than 1.

// Constraints
// 1 <= N <= 10000

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/


function findNumberOfBtVoilations(root) {
    let violationCount = 0;

   function checkBalance(node) {
       if (!node) return 0;

       const leftHeight = checkBalance(node.left);
       const rightHeight = checkBalance(node.right);

       if (Math.abs(leftHeight - rightHeight) > 1) {
           violationCount++;
       }

       return Math.max(leftHeight, rightHeight) + 1;
   }

   checkBalance(root);
   return violationCount;
}