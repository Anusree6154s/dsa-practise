// Problem Description
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Print an integer - The length of the diameter.

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
// 6

// Explanation
// The binary tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_DIAMETEROFBINARYTREE_image_0.png

// The path 8->16->40->10->25->15->9 has 6 edges in it and is the longest path in the given tree.

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

function diameterOfBinaryTree(root) {
    //aprroach: go deep down first, while coming up calculate depth and update highst depth. return the new depth

    //diameter of a tree = longest length of tree arm
    // longest lentgh = longetst arm in left + longest arm in right 
    // we wil do DFS (depth first search) to get the diameter

    //by df we will reach the lowest point of left then right
    // so each time we reach down we wiill calculate left+right and update dia 
    // and we will return maxdepth(left, right) + 1 each time we come up -> to indicate depth of the level

    //null node has depth=0
    //so for parent, we will take teh highest depth compared to its left and right child and add 1 to it (to get max depth)
    // so for a parent with 2 null kids (two 0 depths), the depth will be 0+1 =1
    let diameter = 0;

    function dfs(node) {
        if (!node) return 0;

        //first travel to loweest point of each left and right
        let leftDepth = dfs(node.left);
        let rightDepth = dfs(node.right);

        //after coming back calculate and update highest depth
        diameter = Math.max(diameter, leftDepth + rightDepth); //store the largest among the diameter uptil now vs new diameter

        //finally leave this level and go up by ++ the current depth
        return Math.max(leftDepth, rightDepth) + 1; //return current highest depth+1 for next iteration
    }

    dfs(root);
    return diameter;

}



//create ListNode
function createListNode() {

    // 10 15 25 12 40 16 8 9
    // 1 5 3
    // 5 6 -1
    // 6 -1 7
    // 7 -1 -1
    // 3 2 4
    // 2 8 -1
    // 8 -1 -1
    // 4 -1 -1
    let head = new TreeNode(10)
    head.left = new TreeNode(40)
    head.right = new TreeNode(25)
    head.left.left = new TreeNode(16)
    head.left.left.right = new TreeNode(8)
    head.right.left = new TreeNode(15)
    head.right.right = new TreeNode(12)
    head.right.left.left = new TreeNode(9)

    return head
}


//test code
let root = createListNode()
console.log(root)
let ans = diameterOfBinaryTree(root)
console.log(ans)
