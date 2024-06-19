// Problem Description
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// Input format
// First line contains N, the number of elements in the tree.

// Next line contains N space separated integers, denoting preorder.

// Next line contains N space separated integers, denoting inorder.

// Output format
// Print two lines by traversing the constructed binary tree.

// First line should contain N space separated integers, denoting preorder.

// Second line should contain N space separated integers, denoting inorder.

// Sample Input 1
// 6

// 1 2 4 5 3 6

// 5 4 2 1 3 6

// Sample Output 1
// 1 2 4 5 3 6

// 5 4 2 1 3 6

// Explanation 1
// The output writes out the preorder and inorder sequence by traversing the binary tree constructed, so it should be the same as the output.

class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

//ct=O(N) for all nodes and inorder array iteration, sc=O(N)-> map space and call stack(recursion)
function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {
    //preorder array is in the order of parent first, so the following elements are always children of eleemnts before it
    //inorder array has the tree like [child.child, child, child.childtreeStart, child.child, child, child.child]

    // we will create parent nodes based on preorder Array, and find its position in inorder array.
    // in inorder array, we will reduce search range till, start==end. then that elemnt is the most bottom parentroot

    // to ease  parent position search we will use map 
    let map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    let i = 0
    function buildTree( inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) return null // the inorder array ends there and no more children


        let parent = new TreeNode(preorder[i]) //create parent
        i++
        let parentIndex = map.get(parent.val) //get parent position

        //incase there is NO SPACE in array to search for kids, it means it has no kids
        //then RETURN PARENT early
        if (inorderStart == inorderEnd) return parent

        //in case there is SPACE in inorder array, SEARCH FOR CHILDREN
        //search for left child between start of inorder to position of parent
        //search for right child between position of parent to end of inorder 
        parent.left = buildTree( inorderStart, parentIndex - 1)
        parent.right = buildTree( parentIndex + 1, inorderEnd)

        //once you get both left and right child (or none thereof), return parent for printing tree
        return parent
    }


    return buildTree( 0, inorder.length - 1)
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
let preorder = [1, 2, 4, 5, 3, 6]
let inorder = [5, 4, 2, 1, 3, 6]
let ans = constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder)
console.log(ans)
