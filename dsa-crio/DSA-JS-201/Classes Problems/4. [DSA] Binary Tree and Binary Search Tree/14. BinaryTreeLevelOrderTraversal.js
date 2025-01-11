// Problem Description
// Given a binary tree, return the level order traversal of its nodes' values.(ie, from left to right, level by level).


// Note that input and output are being handled by a main() method behind the scenes, so you do NOT have to implement the main() method or any I/O here. The inputs are sent as arguments to the function you have to implement.


// You’d have to implement the function defined in the stub, use the arguments, and return the answer based on the return type of the function.


// The structure of the tree is given as a reference for you while writing the code. Do not make any modifications to it, or any of the rest of the stub, or the tests would fail

// Input Format
// First line contains one integer N denoting the number of elements in the array

// Next line contains N words denoting the elements of Binary Tree where null means no element.

// Constraints
// 1<=N<=10^5

// 1<=Ai<=10^9

// Output Format
// Print elements of each level in a separate line.

// Sample Input 1
// 4

// 4 3 2 1

// 1 2 3

// 2 4 -1

// 3 -1 -1

// 4 -1 -1

// Treeview:

// image -https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_BINARYTREELEVELORDERTRAVERSAL_image_0.png

// Sample Output 1
// 4

// 3 2

// 1

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


function binaryTreeLevelOrderTraversal(root) {
    //approach:
    //at each level :
    // 1. record left and right nodes of current level array elements and pop out current level array elements
    // 2. record values of curr level 
    // 3. push values of next level to ans matrix and switch current level and next level arrays


    let currLevel = [root]
    let ans = []
    let nextLevel = []
    let levelValues = []
    while (currLevel.length > 0) {
        let node = currLevel.shift()
        if (node) {
            levelValues.push(node.val); // Collect the value of the current node

            // Enqueue child nodes to nextLevel
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        if (currLevel.length == 0) {
            ans.push(levelValues);
            [currLevel, nextLevel] = [nextLevel, currLevel];
            levelValues = [];
        }
    }

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
let ans = binaryTreeLevelOrderTraversal(head)
console.log(ans)
