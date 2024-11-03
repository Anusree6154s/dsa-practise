// Problem Description
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with values less than the node's value.

// The right subtree of a node contains only nodes with values greater than the node's value.

// Both the left and right subtrees must also be binary search trees.

// Input format
// Line1: Number of Test cases (T)

// Line2 to X: First Test Case’s binary tree structure (refer section below for the format)

// LineX+1 to Y: Second Test Case’s binary tree structure and so on.

// Output format
// Print "Yes" if the tree is a valid BST, else print "No", for every Test Case on a separate line.

// Constraints
// 1 <= T <= 1000

// 1<= Number of Nodes <= 10000

// 0 <= Node values <= 10^5

// It is guaranteed that the sum of Number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 3

// 2 1 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// Yes

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_INTERVIEW_LEVEL1_PACK_105_MODULE_ME_DSA_INTERVIEW_LEVEL1_PACK_105_MODULE_VALIDATEBINARYSEARCHTREE_image_0.png

// The root node's value is 2 which is greater than 1 and lesser than 3. Therefore it is a valid BST.


class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}


function validateBinarySearchTree(root, min = null, max = null) {
    //approach: range based search
    //we check:
    //1. for root.left, if range is between null and curr root
    //2. for root.right, if range is between parent of curr root(aka prev root) and curr root

    //it is because in BST:
    //1. left child is always lesser than all the roots above
    //2. right child is greater than direct parent but smaller than paretn above that parent
    //so if these rules are nto followed, we return false. else if we reach null then return true

    // Base case: an empty tree is a valid BST
    if (root == null) return true;

    // If current node's value is not within the valid range, it's not a BST
    // in case of left children we never have to compare min, because min is always == null
    if (min && root.val <= min) return false;
    if (max && root.val >= max) return false;

    // Recursively validate the left and right subtrees with updated ranges
    return validateBinarySearchTree(root.left, min, root.val) &&
        validateBinarySearchTree(root.right, root.val, max);
}

//create ListNode - bst
function createListNode() {

    //40 20 60 10 30 50 70
    let head = new TreeNode(40)
    head.left = new TreeNode(20)
    head.right = new TreeNode(60)
    head.left.left = new TreeNode(100)
    head.left.right = new TreeNode(30)
    let g = head.left.right
    head.right.left = new TreeNode(50)
    head.right.right = new TreeNode(70)

    return { head, g }
}

//test code
let { head, g } = createListNode()
let ans= validateBinarySearchTree(head)
console.log(ans)
