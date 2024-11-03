// Problem Description
// You are given a binary tree.

// You need to find the nodes in order of top to bottom which will be visible when the tree is viewed from the right side.

// Right view :-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_RIGHTVIEWBINARYTREE_image_0.png

// The visible nodes from top to bottom are 1, 3 and 4.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from right side of the tree from top to bottom.

// Sample Input 1
// 6

// 10 15 25 12 40 16

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 -1

// 2 -1 -1

// 3 2 4

// Sample Output 1
// 10 25 12

// Explanation
// The binary tree is:-

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_TREE_RECURSION_MODULE_ME_DSA_TREE_RECURSION_MODULE_RIGHTVIEWBINARYTREE_image_1.png

// The visible nodes from top to bottom are 10, 25 and 12.

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

function rightViewBinaryTree(root) {
    //approach: at each level down, record right first, else left. return nothing

    //go down levels on both sides(but right first)
    //record maxLevel depth in each round
    //if current level is lower than max level uptil now, update the val
    //this considers that if once right val is stored at a prticular level, the left value will not be stored on the same level
    // if (!root) return root

    // let ans = []
    // let maxLevel = 0
    // let level = 0

    // function goDownRightFirst(root, ans, level) {
    //     if (!root) return

    //     //if level > maxLevel, store the root.val
    //     if (level > maxLevel) {
    //         maxLevel = level
    //         ans.push(root.val)
    //     }

    //     //go deepre in right first then left
    //     goDownRightFirst(root.right, ans, level + 1)
    //     goDownRightFirst(root.right, ans, level + 1)

    //     return

    // }

    // goDownRightFirst(root, ans, level + 1)
    // return ans

    //ALTERNATE APPROACH
    //using map
    if (!root) return root

    let map = new Map()
    let level = 0

    function goDownRightFirst(root, map, level) {
        if (!root) return

        //for one level record only the first and one root.val
        if (!map.has(level)) {
            map.set(level, root.val)
        }

        //go deepre in right first then left
        goDownRightFirst(root.right, map, level + 1)
        goDownRightFirst(root.right, map, level + 1)

        return

    }

    goDownRightFirst(root, map, level)
    return Array.from(map.values())


}


//create ListNode
function createListNode() {

    // 10 40 25 16 15 12
    let head = new TreeNode(10)
    head.left = new TreeNode(40)
    head.right = new TreeNode(25)
    head.left.left = new TreeNode(16)
    head.right.left = new TreeNode(15)
    head.right.right = new TreeNode(12)

    return head
}


//test code
let root = createListNode()
let ans = rightViewBinaryTree(root)
console.log(ans)
