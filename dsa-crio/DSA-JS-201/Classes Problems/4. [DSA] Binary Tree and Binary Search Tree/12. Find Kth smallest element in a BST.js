// Problem Description
// Given a binary search tree, write a function to find the node with the kth smallest value in it and return its value.

// Note: You may assume that k is always valid, 1 ≤ k ≤ BST's total elements.

// Input format
// Line1 to X: Details of the binary tree structure (refer section below for the format)

// Last line contains a single integer k.

// Output format
// Print the value of the kth smallest element.

// Constraints
// 1 <= Number of nodes (N) <= 105

// 1 <= Value of nodes <= 109

// 1 <= k <= N

// Sample Input 1
// 4

// 3 1 4 2

// 1 2 3

// 2 -1 4

// 3 -1 -1

// 4 -1 -1

// 1

// Sample Output 1
// 1

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_KTHSMALLESTELEMENTINABST_image_0.png

// 1 is the 1st smallest element in this BST

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function kthSmallestElementInABst(root, k) {
    //kth smallest value means if nodes put in ascending order, the kth elemnt
    //approach: do inorder traversal k times. the root at kth round is the elemnt

    //INORDER TRAVERSAL
    //approach:
    //edgecase (in this question) - in no root or kth elemnt is found, return 
    //1. go to the leftmost node
    //2. if self is null return, else record self (here means to reduce k)
    //3. if self.right exist repeat 1 and 2 (noe self.right will be self and will get recorded)
    let count = 0
    let result = null
    function inorderTraversal(root) {
        if (!root || result) return
        inorderTraversal(root.left)
        count++
        if (count === k) {
            result = root.val
            return
        }
        inorderTraversal(root.right)
        
    }
    inorderTraversal(root)
    return result
}


//create ListNode - bst
function createListNode() {

    //40 20 60 10 30 50 70
    let head = new TreeNode(40)
    head.left = new TreeNode(20)
    head.right = new TreeNode(60)
    head.left.left = new TreeNode(10)
    head.left.right = new TreeNode(30)
    let g = head.left.right
    head.right.left = new TreeNode(50)
    head.right.right = new TreeNode(70)

    return { head, g }
}

//test code
let { head, g } = createListNode()
let ans = kthSmallestElementInABst(head, 2)
console.log(ans)
