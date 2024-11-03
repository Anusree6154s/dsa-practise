// Problem Description
// Welcome to Lilliput, the land of tiny people. Here, the person with smaller height is considered more intelligent.

// You are given an array of N integers indicating all the Lilliputians standing in a straight line in positions 0 to n-1. The values of the array indicate the Lilliputian heights.

// You will be asked to do two types of actions - update of the form [u x h] and query of the form [q x y]. In the update action [u x h], you have to update the height of the Lilliputian at index x to value h. In the query action [q x y], you have to output the most intelligent Lilliputian’s height in the index range between x to y (both inclusive).

// Input format
// First line will have N, representing the number of Lilliputians in Lilliput.

// Second line will have N space separated integers denoting the height of each Lilliputian standing in the line.

// Third line will have a number A denoting the number of actions.

// Next A lines will have one of the two actions, u or q.

// For the action of type u (update), the line will have u followed by two space separated integers, x and h, where x indicates the index in the array and h indicates the new height of the Lilliputian at that index.

// For the action of type q (query), the line will have q followed by two space separated integers, x and y, where x indicates the start index in the array and y indicates the end index in the array, between which (both inclusive) the most intelligent Lilliputian’s height has to be found.

// Output format
// For each query action, output on a new line, the height of the most intelligent Lilliputian in the given range.

// Constraints
// 1 <= N <= 50000

// 0 <= height[i], h <= 1e9

// 1 <= A <= 50000

// 0 <= x <= y <= n-1

// Sample Input 1
// 5

// 2 3 5 1 9

// 4

// q 0 2

// u 1 0

// q 1 4

// q 3 3

// Sample Output 1
// 2

// 0

// 1

// Explanation 1
// We have 5 Lilliputians with initial heights [2 3 5 1 9]

// We have 4 Actions.

// First action is to query the smallest value (i.e. most intelligent) between indices 0 and 2, or values [2 3 5], the answer to which is 2

// Second action is to update the value at index 1 to 0. So, the array becomes [2 0 5 1 9]

// Third action is to query the smallest value (i.e. most intelligent) between indices 1 and 4, or values [0 5 1 9], the answer to which is 0

// Fourth action is to query the smallest value (i.e. most intelligent) between indices 3 and 3, or value [1], the answer to which is 1, since there is only one value.

/**
 * @param {number} n
 * @param {number} q
 * @param {number[]} height
 * @param {String[]} queries
 * @return {String}
 */
function lilliput(n, heights, num_actions, actions) {
    class SegmentTree {
        constructor(arr) {
            this.n = arr.length;
            this.tree = new Array(4 * this.n);
            this.build(arr, 0, 0, this.n - 1);
        }

        build(arr, node, start, end) {
            if (start === end) {
                this.tree[node] = arr[start];
            } else {
                let mid = Math.floor((start + end) / 2);
                this.build(arr, 2 * node + 1, start, mid);
                this.build(arr, 2 * node + 2, mid + 1, end);
                this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
            }
        }

        update(index, value, node, start, end) {
            if (start === end) {
                // Leaf node
                this.tree[node] = value;
            } else {
                let mid = Math.floor((start + end) / 2);
                if (index <= mid) {
                    // Update left child
                    this.update(index, value, 2 * node + 1, start, mid);
                } else {
                    // Update right child
                    this.update(index, value, 2 * node + 2, mid + 1, end);
                }
                // Update current node
                this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
            }
        }

        query(L, R, node, start, end) {
            if (R < start || end < L) {
                // Outside range
                return Infinity;
            }
            if (L <= start && end <= R) {
                // Inside range
                return this.tree[node];
            }
            // Partially in range
            let mid = Math.floor((start + end) / 2);
            let leftChild = this.query(L, R, 2 * node + 1, start, mid);
            let rightChild = this.query(L, R, 2 * node + 2, mid + 1, end);
            return Math.min(leftChild, rightChild);
        }
    }

    const segmentTree = new SegmentTree(heights[0]);
    const output = [];

    for (let action of actions) {
         action=action.split(' ')
        if (action[0] === 'u') {
            // Update action
            const [, x, h] = action;
            segmentTree.update(x, h, 0, 0, n - 1);
        } else if (action[0] === 'q') {
            // Query action
            const [, x, y] = action;
            const minHeight = segmentTree.query(x, y, 0, 0, n - 1);
            output.push(minHeight);
        }
    }

    return output;
}