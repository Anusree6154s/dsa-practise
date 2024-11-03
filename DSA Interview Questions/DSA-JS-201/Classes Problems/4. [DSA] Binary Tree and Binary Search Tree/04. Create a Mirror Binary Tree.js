// Problem Description
// Given a binary tree, return the root of the mirror binary tree. Mirror binary tree of a binary tree is a binary tree with left and right children of all nodes interchanged.

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_MIRRORBINARYTREE_image_0.png

// Input format
// First line contains an integer t - Number of test cases.

// First line of each test case contains an integer n - Number of nodes.

// Second line of each test case contains n integers - Value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Print the inorder traversal of the mirror tree in a separate line for each test case.

// Sample Input 1
// 2

// 4

// 10 5 9 7

// 1 2 3

// 2 -1 -1

// 3 4 -1

// 4 -1 -1

// 3

// 4 9 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// 9 7 10 5

// 3 4 9

// Explanation
// First test case:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_MIRRORBINARYTREE_image_1.png

// Second test case:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_MIRRORBINARYTREE_image_2.png

// Constraints
// 1 <= t <= 10

// 1 <= n <= 10^5

// 1 <= value of nodes <= 10000


class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function mirrorBinaryTree(root) {
    //approach: first go deep, then start swapping from the bottom. then return root(aka parent)
    //return the parent so that in next round we can swap the parents

    if (!root) return null;

    //first go down and assign temporary variables: left and right
    mirrorBinaryTree(root.left); //once at the bottom, it will return right. so left=root.right
    mirrorBinaryTree(root.right); //and right=root.left
    
    [root.left, root.right] = [root.right, root.left];
    
    return root;

}



//create ListNode
function createListNode() {

    //10 15 25 12 40 16 20
    let head = new TreeNode(10)
    head.left = new TreeNode(40)
    head.right = new TreeNode(25)
    head.left.left = new TreeNode(16)
    head.left.left.right = new TreeNode(20)
    head.right.left = new TreeNode(15)
    head.right.right = new TreeNode(12)

    return head
}


//test code
let root = createListNode()
let ans = mirrorBinaryTree(root)
console.log(ans)
