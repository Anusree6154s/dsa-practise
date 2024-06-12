// Problem Description
// You are given a binary tree. You need to find the nodes in order of left to right which will be visible when the tree is viewed from the top.

// Top view :-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_TOPVIEWBINARYTREE_image_0.png

// The visible nodes from left to right are 4, 2, 1 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from top of the tree from left to right.

// Sample Input 1
// 7

// 10 15 25 12 40 16 20

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 7

// 2 -1 -1

// 3 2 4

// 7 -1 -1

// Sample Output 1
// 16 40 10 25 12

// Explanation
// The binary tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_TOPVIEWBINARYTREE_image_1.png

// The visible nodes from left to right are 16, 40, 10, 25 and 12.

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
*/

function topViewBinaryTree(root) {}