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


class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}


function lowestCommonAncestorInBST(root, p, q) {
    //binary search tree is a tree with children in left being small than parent and right children being larger than parent (can be balanceda and unbalanced)
    //same as finding LCA in tree

    //if !root, root=p or q, return root as left or right
    // else if no left or right, search for left or right (in case of bst we dont have to serach for both, just either of them comparing p, q, and root)
    // if we get left and right now, return root
    //else return left or right, which ever is there

    if (!root || root.val == p || root.val == q) return root
    let left, right
    if (p < root.val || q < root.val) left = lowestCommonAncestorInBST(root.left, p, q)
    if (p > root.val || q > root.val) right = lowestCommonAncestorInBST(root.right, p, q)
    if (left && right) return root
    return left ?? right
}


//create ListNode - bst
function createListNode() {

    //40 20 60 10 30 50 70
    let head = new TreeNode(40)
    head.left = new TreeNode(20)
    head.right = new TreeNode(60)
    head.left.left = new TreeNode(10)
    head.left.right = new TreeNode(30)
    head.right.left = new TreeNode(50)
    head.right.right = new TreeNode(70)

    return head
}


//test code
let head = createListNode()
let ans = lowestCommonAncestorInBST(head, 30, 60)
console.log(ans)
