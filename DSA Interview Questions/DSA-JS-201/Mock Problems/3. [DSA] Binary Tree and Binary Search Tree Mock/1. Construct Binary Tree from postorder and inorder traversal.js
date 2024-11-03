// Problem Description
// Given postorder and inorder traversal of a tree, construct the binary tree and return its root. Note: You may assume that duplicates do not exist in the tree.

// Input format
// First line contains N, number of elements in the tree.

// Next line contains N space separated integers, denoting postorder.

// Next line contains N space separated integers, denoting inorder.

// Output format
// Print two lines, first line contains N space separated integers denoting postorder.

// Second line contains N space separated integers, denoting inorder.

// Note: You just have to return the root of the tree. The input/output is already handled.

// Sample Input 1
// 5

// 10 4 5 7 8

// 8 10 4 7 5

// Sample Output 1
// 10 4 5 7 8

// 8 10 4 7 5

// Explanation
// The below tree can be formed with the given postorder and inorder Visualization:

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MOCK_MODULE_ME_DSA_TREE_RECURSION_MOCK_MODULE_CONSTRUCTBINARYTREEFROMPOSTORDERANDINORDERTRAVERSAL_image_0.png

// Constraints
// 1 <= N <= 10^5

// -10^9 <= Value of node <= 10^9

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
    //IMP: ITS POSTORDER. SO i WILL COUNT BACKWARDS and right child will be first , then left
    //postorder gives the order og new linkedlists
    //inorder gives the position of its children

    //imp: check for returning parent node twice

    //map positions of inorder values
    let map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    function buildTree(start, end) {
        if (start > end) return null;

        // The last element of postorder is the root of the current tree
        let parentVal = postorder.pop();
        let parent = new TreeNode(parentVal);

        //if start==end return parent
        if (start == end) return parent;
        // The line if (start === end) return parent; is not strictly necessary for the function to work correctly, but it serves as an optimization. Without it, the function would still correctly build the tree, but it would perform an unnecessary recursive call when there are no children for a node. This optimization reduces the number of recursive calls, making the code slightly more efficient.

        // Get the index of the root in inorder array
        let index = map.get(parentVal);

         // Build the right subtree first because we are consuming the postorder list from the end
        parent.right = buildTree(index + 1, end);
        parent.left = buildTree(start, index - 1);

        //else if the entire paretn building is over, return parent
        return parent;


    }
    return buildTree(0, inorder.length - 1)
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
let preorder = [10, 4, 5, 7, 8]
let inorder = [8, 10, 4, 7, 5]
let ans = constructBinaryTreeFromPostorderAndInorderTraversal(preorder, inorder)
console.log(ans)

