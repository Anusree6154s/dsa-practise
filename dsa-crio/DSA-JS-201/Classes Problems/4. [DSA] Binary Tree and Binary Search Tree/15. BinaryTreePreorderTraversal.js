// Problem Description
// Given a binary tree, return the preorder traversal of its nodes' values.

// For the tree given Preorder traversal will be:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEPREORDERTRAVERSALBASIC_image_0.png

// Preorder Traversal Means: Process (Root, Left, Right) : 1 2 4 5 3


// Note that input and output are being handled by a main() method behind the scenes, so you do NOT have to implement the main() method or any I/O here. The inputs are sent as arguments to the function you have to implement.


// You’d have to implement the function defined in the stub, use the arguments, and return the answer based on the return type of the function.


// The structure of the tree is given as a reference for you while writing the code. Do not make any modifications to it, or any of the rest of the stub, or the tests would fail

// Input format
// First line contains T, denoting the number of test cases given.

// For each test case, we follow the following format:

// First line contains N, denoting the number of nodes the tree has.

// In each test case tree will be given to you.

// Output format
// For each test case,print in a new line n space separated integers. The values of preorder traversal of the nodes.

// Sample Input 1
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 1
// 5 1 4 3 6

// Explanation 1
// Treeview:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEPREORDERTRAVERSALBASIC_image_1.png


/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

Use new TreeNode(data) to create new Node
*/


/**
 * @param {TreeNode} root
 * @return {number[]}
 */


class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function preorderTraversal(root) {
    //preorder traversal is where we record parent, left child, then right child
    //1. so keep recording self
    //2. travel down left  after recrding self
    //3. once root reaches null, return up
    //4. travel down right and repeat 1 and 2

    let ans = []
    function preorder(root) {
        if (!root) return
        ans.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }

    preorder(root)
    return ans
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
let ans = preorderTraversal(head)
console.log(ans)
