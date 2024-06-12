// Problem Description
// Given a Binary Search Tree (BST) and a positive integer k, find the k’th largest element in the Binary Search Tree.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Last line contains an integer k - The kth largest element to be searched

// Output format
// Print the value of the kth largest element.

// Sample Input 1
// 7

// 40 20 60 10 30 50 70

// 1 2 3

// 2 4 5

// 3 6 7

// 4 -1 -1

// 5 -1 -1

// 6 -1 -1

// 7 -1 -1

// 3

// Sample Output 1
// 50

// Explanation
// The binary search tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MOCK_MODULE_ME_DSA_TREE_RECURSION_MOCK_MODULE_KTHLARGESTELEMENTINABST_image_0.png

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

// 1 <= k <= N

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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function kthLargestElementInABst(root, k) {}