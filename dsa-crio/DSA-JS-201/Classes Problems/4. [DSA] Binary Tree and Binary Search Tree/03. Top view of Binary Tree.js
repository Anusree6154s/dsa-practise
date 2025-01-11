// Problem Description
// You are given a binary tree. You need to find the nodes in order of left to right which will be visible when the tree is viewed from the top.

// Top view :-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_TOPVIEWBINARYTREE_image_0.png

// The visible nodes from left to right are 4, 2, 1 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from top of the tree from left to right.

// Sample Input 1
// 7

// 10 15 25 12 40 16 20

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 7

// 2 -1 -1

// 3 2 4

// 7 -1 -1

// Sample Output 1
// 16 40 10 25 12

// Explanation
// The binary tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_TOPVIEWBINARYTREE_image_1.png

// The visible nodes from left to right are 16, 40, 10, 25 and 12.

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

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

function topViewBinaryTree(root) {
    //approach: each time we go down level, we calculate the breadth from the center, and record it in map. return nothing 
    // for each breadth, one node will be recorded. if a node already exsits for one breadth, no other node will be recorded
    // so from the top, the very first node seen will be recorded first

    //using map 
    let map = new Map()
    let level = 0

    function topView(root, map, level) {
        if (!root) return

        //first record the currnt node, if map doesnt have
        if (!map.has(level)) map.set(level, root.val)

        // then level-1 for left and level+1 for right 
        topView(root.left, map, level - 1)
        topView(root.right, map, level + 1)

        return
    }

    topView(root, map, level)

    //now sort it from negative to positive, because map wiill be unsorted

    // Extract the keys and sort them in ascending order
    let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    // Use the sorted keys to create a sorted array of values
    let sortedValues = sortedKeys.map(key => map.get(key));
    
    return sortedValues
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
let ans = topViewBinaryTree(root)
console.log(ans)
