// Problem Description
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// The lowest common ancestor is defined between two nodes p and q as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself).

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Last line contains two integers p and q - The given nodes.

// Output format
// Output an integer - The value of the LCA node.

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

// 30 60

// Sample Output 1
// 40

// Explanation
// The binary search tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_LOWESTCOMMONANCESTORINBST_image_0.png

// The node 40 is the lowest node which has both 30 & 60 as its descendants.

function lowestCommonAncestorInBST(root, p, q) {}