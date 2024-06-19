// Problem Description
// Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each parent has a link to its child.

// Input format
// The tree will be given along with the node for which you have to find the successor.

// Q: Q number of queries will be given to you.

// Output format
// Print the value of the successor node. If it doesn’t exist then print -1.

// Sample Input 1
// 3

// 5 4 6

// 0 1 2

// 1 -1 -1

// 2 -1 -1

// 2

// 2

// 0

// Sample Output 1
// -1

// 6

// Explanation 1
// The tree given in the sample will look like -

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_INORDERSUCCESSOR_image_0.png

// There will be no successor of node with value 6.

// The successor of node having value 5 will be the node with value 6.

// Constraints
// 1<= Number of nodes <= 20000

// 1<= Q <= 10000

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}


function inOrderSuccessor(root, givenNode) {
    //in inorder traversal, first left comes, then parent, then right node
    //so, inorder successor of parent is always the leftest node of right. if no right, then sibling right parent's child

    //if givenNode "has a right child", find the leftest node of it
    // (checking whole of left arm)
    if (givenNode.right) {
        let node = givenNode.right
        //if givenNode.right has left
        while (node.left) {
            node = node.left
        }
        return node
    }

    //if givenNode has "no right child" - (checking whole of right arm)
    // answer will be a parent of a left node or a right node
    //maintain 2 variables: successor(parent-ans), current(right node)
    //move in the right arm
    let successor = null, curr = root
    while (curr !== null) {
        if (givenNode.val < curr.val) { //move to left arm if given node lies on left arm
            //update successor as curr and curr as the left node
            successor = curr
            curr = curr.left
        } else if (givenNode.val > curr.val) { //move to right arm if given node lies on right arm
            curr = curr.right // dont update successor. if loop ends without it, means given node is not here
        } else { //if given node == current, then parent of curr is the answer
            break
        }
    }

    return successor ? successor.val : -1



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
let ans = inOrderSuccessor(head, g)
console.log(ans)
