// Problem Description
// Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root. The boundary includes left boundary, leaves, and right boundary in order.

// The left boundary is defined as the path from the root to the left-most node. The right boundary is defined as the path from the root to the right-most node. If the root doesn’t have a left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not to any subtrees.

// The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if it exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

// The right-most node is also defined in the same way with left and right exchanged.

// Example:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEBOUNDARYTRAVERSAL_image_0.png

// The output for this tree would be 1,2,4,5,6 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes.

// Sample Input 1
// 8

// 10 15 25 12 40 16 8 9

// 1 5 3

// 5 6 -1

// 6 -1 7

// 7 -1 -1

// 3 2 4

// 2 8 -1

// 8 -1 -1

// 4 -1 -1

// Sample Output 1
// 10 40 16 8 9 12 25

// Explanation
// The binary tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREEBOUNDARYTRAVERSAL_image_1.png

// Boundary traversal starts from the root node i.e. 10 then the left boundary i.e. 10, 40, 16, 8, the leaf nodes i.e. 8, 9, 12 and finally the right boundary i.e. 12, 25, 10. We won't take a particular node twice so the final answer after ignoring the repeated nodes would be - 10, 40, 16, 8, 9, 12, 25.

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function binaryTreeBoundaryTraversal(root) {
    //travese left side first - top to bottom
    //traverse leaves -  bottom left to top right
    //traverse - bottom to top

    //while travelling right and left side, we dont have to travel to its bracnches
    //which means in leftTraversal, if no left ,only then go to right
    //similary for rightTraversal, if nor ight then only go to left

    let ans = []
    function leftTraversal(root, ans) {
        if (!root) return

        //record node first, always must have a child (cause for childless ones we use leafTraversal)
        if (root.right || root.left) ans.push(root.val)

        // then traverse 
        if (root.left) { leftTraversal(root.left, ans) }
        else { leftTraversal(root.right, ans) }

        return
    }
    function leafTraversal(root, ans) {
        if (!root) return

        // first traverse to left bottom
        leafTraversal(root.left, ans)

        //record the leaves if no children
        if (!root.right && !root.left) ans.push(root.val)

        // then traverse to bottom of right and come up 
        leafTraversal(root.right, ans)

        return
    }
    function rightTraversal(root, ans) {

        if (!root) return

        // first go the botom of right 
        if (root.right) { rightTraversal(root.right, ans) }
        else { rightTraversal(root.left, ans) }

        // the record the node vlue ,always must have a child (cause for childless ones we use leafTraversal)
        if (root.right || root.left) ans.push(root.val)

        return
    }

    leftTraversal(root, ans)
    leafTraversal(root, ans)
    rightTraversal(root, ans)

    return ans

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
let ans = binaryTreeBoundaryTraversal(root)
console.log(ans)
