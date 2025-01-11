// Problem Description
// Given K sorted arrays, possibly of different sizes, merge them and print the sorted output.

// Input format
// First line contains an integer K - Number of arrays.

// For each array there is two lines of input:

// First line contains an integer n - Size of array.

// Second line contains n integers - The array.

// Output format
// Print in single line, the elements in sorted order.

// Sample Input 1
// 3

// 3

// 2 4 7

// 1

// 8

// 4

// 2 5 5 9

// Sample Output 1
// 2 2 4 5 5 7 8 9

// Explanation
// Elements of 1st array - 2, 4, 7.

// Elements of 2nd array - 8.

// Elements of 3rd array - 2, 5, 5, 9.

// Merging the elements and printing them in sorted order will give - 2, 2, 4, 5, 5, 7, 8, 9.

// Constraints
// 1 <= K <= 10^5

// 1 <= n <= 10^5

// -10^6<= Array elements <= 10^6

// Note: Total number of elements will be less than 10^6.
function mergeKSortedArrays(arr) {
    //we wil iterate an store the first elements of all arrays in the matrix first
    //then we will repopulate them again

    //using min heap, sor sorting ascending

    class minHeap {
        //contructor
        //get parent, left and right child
        //insert, remive, swap, peek, size
        //heapify up, heapify down

        constructor() {
            this.heap = []
        }

        getParentIndex(i) {
            return Math.floor((i - 1) / 2)
        }

        getLeftChildIndex(i) {
            return 2 * i + 1
        }
        getRightChildIndex(i) {
            return 2 * i + 2
        }
        insert(val) {
            this.heap.push(val)
            if (this.size() > 1) this.heapifyUp()
        }
        remove() {
            if (this.size() === 0) return null;
            if (this.size() === 1) return this.heap.pop();
            this.swap(0, this.size() - 1);
            const val = this.heap.pop();
            this.heapifyDown();
            return val;
        }
        peek() {
            return this.heap[0]
        }
        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }
        size() {
            return this.heap.length
        }

        heapifyUp() {
            //minHeap
            //min at parent, larger at children
            //start from end to top, till parent==0
            //take self and find its parent. if parent bigger than self, swap. if parent<=self then break

            let selfIndex = this.size() - 1
            let parentIndex = this.getParentIndex(selfIndex)
            while (parentIndex >= 0 && this.heap[parentIndex][0] > this.heap[selfIndex][0]) {
                this.swap(parentIndex, selfIndex)
                selfIndex = parentIndex
                parentIndex = this.getParentIndex(selfIndex)
            }


        }
        heapifyDown() {
            //minHeap
            //start at parent being the smaller value
            //find the smallest value between left child and right child
            //if no smaller value found, break, else swap and update smaller value child as the next parent 

            let parentIndex = 0
            let smallestIndex = 0
            while (parentIndex < this.size()) {
                let leftChildIndex = this.getLeftChildIndex(parentIndex)
                let rightChildIndex = this.getRightChildIndex(parentIndex)

                let leftChild = this.heap[leftChildIndex]
                let rightChild = this.heap[rightChildIndex]

                if (leftChildIndex < this.size() && leftChild < this.heap[smallestIndex]) smallestIndex = leftChildIndex
                if (rightChildIndex < this.size() && rightChild < this.heap[smallestIndex]) smallestIndex = rightChildIndex

                if (parentIndex == smallestIndex) {
                    break
                } else {
                    this.swap(parentIndex, smallestIndex)
                    parentIndex = smallestIndex
                }
            }

        }
    }

    let heap = new minHeap()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) heap.insert([arr[i][0], i, 0])
    }


    let ans = []
    while (heap.size() > 0) {
        //get the value, array inded and element index from heap one by one
        //add value to the ans array
        //add next element to heap if it is less than array length
        let [value, arrayIndex, elementIndex] = heap.remove()
        ans.push(value)
        if (elementIndex + 1 < arr[arrayIndex].length) heap.insert([arr[arrayIndex][elementIndex + 1], arrayIndex, elementIndex + 1]);
    }

    return ans
}

let arr = [[2, 4, 7], [8], [2, 5, 5, 9]]
let result = mergeKSortedArrays(arr)
console.log(result)
