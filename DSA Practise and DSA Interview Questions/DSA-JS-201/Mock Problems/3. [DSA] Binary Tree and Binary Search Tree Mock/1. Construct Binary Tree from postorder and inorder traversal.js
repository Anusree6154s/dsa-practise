// Problem Description
// Given postorder and inorder traversal of a tree, construct the binary tree and return its root. Note: You may assume that duplicates do not exist in the tree.

// Input format
// First line contains N, number of elements in the tree.

// Next line contains N space separated integers, denoting postorder.

// Next line contains N space separated integers, denoting inorder.

// Output format
// Print two lines, first line contains N space separated integers denoting postorder.

// Second line contains N space separated integers, denoting inorder.

// Note: You just have to return the root of the tree. The input/output is already handled.

// Sample Input 1
// 5

// 10 4 5 7 8

// 8 10 4 7 5

// Sample Output 1
// 10 4 5 7 8

// 8 10 4 7 5

// Explanation
// The below tree can be formed with the given postorder and inorder Visualization:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MOCK_MODULE_ME_DSA_TREE_RECURSION_MOCK_MODULE_CONSTRUCTBINARYTREEFROMPOSTORDERANDINORDERTRAVERSAL_image_0.png

// Constraints
// 1 <= N <= 10^5

// -10^9 <= Value of node <= 10^9

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
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {}