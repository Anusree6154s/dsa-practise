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

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function balanceBST(root) {
    // unbalanced BST is a BST where one side has more levelled nodes than other 
    //balanced BST has almost equal number of nodes per level
    // the common thing in a BST which has benn converted from one to another, is that tehy both have same inorder traversal

    //approach:
    //1. find inorder traversal array of unbalanced BST
    //2. build a balanced BST from inorder array

    let inorder = []
    function makeInorderArray(root) {
        //1. first traverse to the leftest node, and return when null
        //2. then while coming up first record self, 
        // if parent has right child repeat 1 and 2 for parent.right (means go to the leftest)(now parent.right is the new root and self will be recorded)
        // if no parent.right, then return

        if (!root) return
        makeInorderArray(root.left)
        inorder.push(root.val)
        makeInorderArray(root.right)
        return
    }
    


    function buildBST(start, end) {
        //we get the root by finding the mid between start and end

        //approach:
        //edgecase: if start>end in inorder, return null - which means no child
        //1. create new node on the root
        //2. find the position of the root in inorder array (mid of aary)
        //i. find left child between inorder[0] and inorder[mid-1]
        //ii. find right child between inorder[mid+1] and inorder[0]
        //3. retrun the fully formed parent root for printing

        if (start > end) return null
        let mid = Math.floor((start + end) / 2)
        let parent = new TreeNode(inorder[mid])

        parent.left = buildBST(start, mid - 1)
        parent.right = buildBST(mid + 1, end)
        return parent
    }

    makeInorderArray(root)
    root = buildBST(0, inorder.length) //new root

    return root
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
let ans = balanceBST(head)
console.log(ans)
