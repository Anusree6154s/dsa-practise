// Problem Description
// Given a binary tree, return the inorder traversal of its nodes' values.

// For the tree given shown here

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEINORDERTRAVERSAL_image_0.png

// Inorder Traversal would result in - Process (Left, Root, Right) : 4 2 5 1 3

// Input format
// First line contains T, denoting the number of test cases given.

// For each test case, we follow the following format:

// First line contains N, denoting the number of nodes the tree has.

// The next N lines contain the binary tree structure ( format is explained at the end of this page).

// Output format
// For each test case, print on a new line, n space separated integers denoting the inorder traversal of the nodes.

// Constraints
// 1<= T <= 1000

// 1<= Number of nodes in a Tree <=10000

// 0 <= Value of the nodes <= 10^9

// It's guaranteed that the sum of the number of tree nodes across all test cases will be less than 500000.

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
// 1 5 3 4 6

// Explanation 1
// The tree can be represented as :

// image - 'https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEINORDERTRAVERSAL_image_1.png
// '
// The inorder is hence 1 , 5 , 3 , 4 , 6.

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

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}


function inorderTraversal(root) {
    //aproach:
    //edgecase: if no root, return null
    //1. go to the leftest 
    //2. while coming back up, record self
    // 3. go to the right child to repaet 1 and 2
    let ans = []
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        ans.push(root.val)
        inorder(root.right)
    }
    inorder(root)
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
let ans = inorderTraversal(head)
console.log(ans)
