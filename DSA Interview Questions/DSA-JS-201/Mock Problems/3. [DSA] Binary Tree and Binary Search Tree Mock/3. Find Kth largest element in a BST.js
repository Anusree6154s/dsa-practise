// Problem Description
// Given a Binary Search Tree (BST) and a positive integer k, find the k’th largest element in the Binary Search Tree.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Last line contains an integer k - The kth largest element to be searched

// Output format
// Print the value of the kth largest element.

// Sample Input 1
// 7

// 40 20 60 10 30 50 70

// 1 2 3

// 2 4 5

// 3 6 7

// 4 -1 -1

// 5 -1 -1

// 6 -1 -1

// 7 -1 -1

// 3

// Sample Output 1
// 50

// Explanation
// The binary search tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MOCK_MODULE_ME_DSA_TREE_RECURSION_MOCK_MODULE_KTHLARGESTELEMENTINABST_image_0.png

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

// 1 <= k <= N


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
 * @param {number} k
 * @return {number}
 */

function kthLargestElementInABst(root, k) {
    //keth largest element: kth element id in descending order

    //in bst to get largset to smallest, we need to so reverse inorder traversal
    //1. which means go to rightest end
    //2. while comingup record self
    //3. got to the left child and repeat 1 and 2 (left self will automaticall get recorded)

    let ans = []
    function reverseInorderTraversal(root) {
        if (!root) return
        reverseInorderTraversal(root.right)
        ans.push(root.val)
        reverseInorderTraversal(root.left)
    }

    reverseInorderTraversal(root)
    return ans[k - 1]
}



//create ListNode
function createListNode() {

    //10 15 25 12 40 16 20
    let head = new TreeNode(60)
    head.left = new TreeNode(40)
    head.right = new TreeNode(80)
    head.left.left = new TreeNode(20)
    head.left.right = new TreeNode(50)
    head.right.left = new TreeNode(70)
    head.right.right = new TreeNode(90)

    return head
}


//test code
let head = createListNode()
let ans = kthLargestElementInABst(head, 4)
console.log(ans)

