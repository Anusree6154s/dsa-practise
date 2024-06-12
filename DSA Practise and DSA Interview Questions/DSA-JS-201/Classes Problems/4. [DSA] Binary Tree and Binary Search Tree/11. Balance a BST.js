// Problem Description
// Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

// Input format
// First line contains an integer T - Number of test cases.

// For each test case:-

// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output the balanced tree in the same format as given in input.

// Note: You just have to return the balanced tree’s root, the input/output is handled.

// Sample Input 1
// 1

// 4

// 40 20 10 30

// 1 2 -1

// 2 3 4

// 3 -1 -1

// 4 -1 -1

// Sample Output 1
// 1

// 4

// 20 10 30 40

// 1 2 3

// 2 -1 -1

// 3 -1 4

// 4 -1 -1

// Explanation
// The initial binary search tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BALANCEBST_image_0.png

// Balanced binary search tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BALANCEBST_image_1.png

// Constraints
// 1 <= T <= 100

// 1 <= N <= 1000

// 1 <= Values of the Nodes <= 10^9

function balanceBST(root) {}