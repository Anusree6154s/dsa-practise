// Problem Description
// We are given a list of (axis-aligned) rectangles. Each rectangle[i] = [x1, y1, x2, y2] , where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the ith rectangle.

// Find the total area covered by all rectangles in the plane. Since the answer may be too large, return it modulo 10^9 + 7.

// Note: y1 will always be 0.

// Input format
// First line will have N, representing the number of rectangles.

// Next N lines will have 4 integers x1 y1 x2 y2, representing the bottom left corner (x1, y1) and top right corner (x2, y2)

// Output format
// Output total area covered modulo 10^9+7

// Constraints
// 1 <= N <= 40000

// rectanges[i].length = 4

// 0 <= rectangles[i][j] <= 10^9

// The total area covered by all rectangles will never exceed 2^63 - 1 and thus will fit in a 64-bit signed integer

// Sample Input 1
// 3

// 0 0 2 2

// 1 0 2 3

// 1 0 3 1

// Sample Output 1
// 6

// Explanation 1
// The area of 6 can be seen from this diagram which has the 3 rectangles from the input.

//  image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_RECTANGLEAREA_image_0.png

/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {number}
 */


function rectangleArea(n, rectangles) {

    class Node {
        constructor() {
            this.left = 0
            this.right = 0;
            this.count = this.totalLength = 0;
        }
    }

    class SegmentTree {
        constructor(nums) {
            this.nums = nums;
            this.n = nums.length;
            this.tree = Array.from({ length: this.n * 4 }, () => new Node());
            this.build(0, 0, this.n - 1);
        }

        build(index, left, right) {
            this.tree[index].left = left;
            this.tree[index].right = right;
            if (left !== right) {
                const mid = (left + right) >> 1;
                this.build(2 * index + 1, left, mid);
                this.build(2 * index + 2, mid + 1, right);
            }
        }

        modify(index, left, right, value) {
            if (left <= this.tree[index].left && this.tree[index].right <= right) {
                this.tree[index].count += value;
            } else {
                const mid = Math.floor((this.tree[index].left + this.tree[index].right) / 2);
                if (left <= mid) { //if left lies between [0 - mid]
                    this.modify(2 * index + 1, left, right, value);
                }
                if (right > mid) { //check if right is between [mid+1 - infinity]
                    this.modify(2 * index + 2, left, right, value);
                }
            }
            this.pushup(index);
        }

        pushup(index) {
            if (this.tree[index].count > 0) {

                this.tree[index].totalLength = this.nums[this.tree[index].right + 1] - this.nums[this.tree[index].left];
            } else if (this.tree[index].left === this.tree[index].right) { //check if leaf node
                this.tree[index].totalLength = 0;
            } else {
                this.tree[index].totalLength = this.tree[2 * index + 1].totalLength + this.tree[2 * index + 2].totalLength;
            }
        }

        get length() {
            return this.tree[0].totalLength;
        }
    }


    const segments = [];
    const allY = new Set();
    for (const [x1, y1, x2, y2] of rectangles) {
        if (x1 == x2 || y1 == y2) continue
        segments.push([x1, y1, y2, 1]);
        segments.push([x2, y1, y2, -1]);
        allY.add(y1);
        allY.add(y2);
    }

    if (segments.length == 0) return 0
    segments.sort((a, b) => a[0] - b[0] || b[3] - a[3]);
    const sortedY = Array.from(allY).sort((a, b) => a - b);
    const tree = new SegmentTree(sortedY);
    const yToIndex = Object.fromEntries(sortedY.map((y, index) => [y, index]));

    let area = 0n;
    const mod = BigInt(1000000007);
    let lastX = segments[0][0];

    for (let i = 0; i < segments.length; i++) {
        const [currX, y1, y2, type] = segments[i];

        if (i > 0) {
            area += BigInt(tree.length) * BigInt(currX - lastX);
            area %= mod;
        }

        tree.modify(0, yToIndex[y1], yToIndex[y2] - 1, type);
        lastX = currX;
    }

    return Number(area);


}