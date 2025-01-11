// Problem Description
// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

// Input format
// Line 1: Number of Test cases (T)

// Line 2 to X: First Test Case binary tree structure (refer section below for the format)

// Line X+1 to Y: Second Test Case details and so on.

// Output format
// For each test case, print N (number of nodes in the tree) space separated values of next nodes on a separate line. If nothing exists in the next print "null" without quotes.

// Constraints
// 1 <= T <= 100

// 1 <= N <= 100000

// 0 <= Value of nodes <= 10^9

// It is guaranteed that the sum of the number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 3

// 1 2 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// Yes

// Explanation 1
// For each node the difference of depth of left subtree and right subtree is less than equal to 1 so the tree is balanced.

// Sample Input 2
// 1

// 3

// 1 2 3

// 1 2 -1

// 2 3 -1

// 3 -1 -1

// Sample Output 2
// No

// Explanation 2
// Node(1) has depth of the left subtree is 2 and depth of right subtree is 0 hence the tree is unbalanced.

// Instructions to create custom input for a Binary Tree
// In order to specify a binary tree that can be used as custom input to the problem, you’ll need to follow this convention.

// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes

// Format of each line (space separated): Parent_node Left_child_node Right_child_node


// Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
        this.parent = null;
    }
}


/**
 * @param {TreeNode} root
 * @return {Boolean}
 */

function checkBalanced(root) {
    //so we are going to recursively find the height of each level

    //in helper funtion:
    //edgecase: if not root(no child) return height as -1 (so that when we add height of next level, starting  height will be 0)
    //for that we will go deep to the bottom level in botg right and left
    //while coming back up, we will return the max between them +1

    //if height goes greater than 1 iat any level we will return -Infinity
    // if any right or left also returns -Infinity we will return -Infinity 

    // in original function we check if returned height is -Infinity or not 

    function checkHeight(root) {
        if (!root) return -1 //height of null children is -1

        let leftHeight = checkHeight(root.left)
        let rightHeight = checkHeight(root.right)

        let childrenHeight = Math.abs(leftHeight - rightHeight) //currHeight shouldn't go above 1 or -1 
        console.log(childrenHeight, root.val)
        if (leftHeight == -Infinity || rightHeight == -Infinity || childrenHeight > 1) {
            return -Infinity
        }

        let currHeight = Math.max(leftHeight, rightHeight)
        return currHeight + 1
    }

    let height = checkHeight(root)
    return height !== -Infinity

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
let head = createListNode()
let ans = checkBalanced(head)
console.log(ans)

