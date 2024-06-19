// Problem Description
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. LCA between two nodes p and q is defined as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself)

// Note: For the solution method provided, the input parameters are the nodes p and q, not node values. The return value expected from the method is the LCA node and not the node’s value. The below Input and Output format show node values which the Driver file will take care of; the user doesn’t have to edit the Driver code.

// Input format
// Line 1 has T: no of test cases given.

// Line 2 to X: First test case details with first set of lines giving the binary tree structure (refer section below for the format) and last line giving two node values (integers) whose LCA node has to be found.

// Line X+1 to Y: Second Test case details and so on.

// Output format
// Print the value of the node which is the common ancestor of two nodes.

// Constraints
// 1 <= T <= 1000

// 1 <= N <= 10000, Number of nodes in the tree

// 0 <= Node values <= 10^9

// It is guaranteed that the sum of the number of tree nodes for all test cases will be < 500000.

// Sample Input 1
// 1

// 5

// 2 3 7 8 9

// 1 2 3

// 2 4 5

// 3 -1 -1

// 4 -1 -1

// 5 -1 -1

// 7 2

// Sample Output 1
// 2

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_COMMONANCESTOR_image_0.png

// The LCA of node with value 2 and node with value 7 is the node with value 2.

// Instructions to create custom input for a Binary Tree
// In order to specify a binary tree that can be used as custom input to the problem, you’ll need to follow this convention.

// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes

// Format of each line (space separated): Parent_node Left_child_node Right_child_node

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function commonAncestor(root, p, q) {
    //approach: to find 2 variables left and right only if p and q is found
    // and keep returning p and q, this hteri common parent arrives(only happens when left and right both variables are filled for any parent)
    //this means we wouldnt return left or right values, unless p and q is found. else return null

    // to get right and left values in lower levels or to check if the head itself is the p or q 
    if (!root || root === p || root === q) return root;

    // if p or q is not found, go down levels on both sides to find p and q
    let left = commonAncestor(root.left, p, q);
    let right = commonAncestor(root.right, p, q);

    //after coming back, if we have left and right, the parent is the lca
    if (left && right) {
        return root;
    }

    //if left or right is not there, then either of them could be the lca
    return left ? left : right;


    //     If root is null, or either p or q is found at root, return root.
    // Recursively search for p and q in the left and right subtrees.
    // If both left and right are non-null (i.e., one is found in each subtree), then root is the LCA.
    // Otherwise, return the non-null subtree (either left or right).
}

//create ListNode
function createListNode() {

    //10 15 25 12 40 16 20
    let head = new TreeNode(10)
    let p = head
    head.left = new TreeNode(40)
    head.right = new TreeNode(25)
    head.left.left = new TreeNode(16)
    let q = head.left.left
    head.left.left.right = new TreeNode(20)
    head.right.left = new TreeNode(15)
    head.right.right = new TreeNode(12)

    return { head, p, q }
}


//test code
let { head, p, q } = createListNode()
let ans = commonAncestor(head, p, q)
console.log(ans.val)
