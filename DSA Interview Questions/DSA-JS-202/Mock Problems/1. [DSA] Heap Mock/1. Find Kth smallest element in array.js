// Problem Description
// Find the kth smallest element in an unsorted array. Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Input format
// First line contains an integer N - Number of elements in the array.

// Second line contains N integers - The array elements.

// Third line contains the integer k.

// Output format
// Print the kth smallest element.

// Sample Input 1
// 5

// 8 5 3 8 5

// 3

// Sample Output 1
// 5

// Explanation
// The elements in the sorted order are - 3,5,5,8,8. The 3rd smallest element is 5.

// Constraints
// 1 <= k <= N <= 10^5

// 0 <= array elements <= 10^9

function kthSmallestElementInAnArray(n, nums, k) {
    //max Heap with bounds of k
    //so the heap will get accumulated as last being smallest, secong last smallest, etc

    class maxHeap {
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
        peek() {
            return this.heap[0]
        }
        remove() {
            if (this.size() == 0) return null
            if (this.size() == 1) return this.heap.pop()
            this.swap(0, this.size() - 1)
            let val = this.heap.pop()
            this.heapifyDown()
            return val
        }
        size() {
            return this.heap.length
        }
        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }


        heapifyUp() {
            //bring the bigger element up
            //start from last element
            //compare to parent
            //if self larger, swap with parent, parent is the new self
            //do till self index ==0

            let currIndex = this.size() - 1
            while (currIndex > 0) {
                let parentIndex = this.getParentIndex(currIndex)
                let curr = this.heap[currIndex]
                let parent = this.heap[parentIndex]

                if (curr <= parent) {
                    break;
                }
                this.swap(currIndex, parentIndex)

                currIndex = parentIndex

            }
        }
        heapifyDown() {
            //to take smaller elemnt from top to bottom. so we mark it as largest
            //start from parent
            //comparet to left child and right child
            //if children bigger, then mark it as new largest
            // if it still not equal to parent,then swap
            // the largest index is paretn now
            //do till paretn is within heap limits

            let parentIndex = 0
            while (true) {
                let largestIndex = parentIndex;
                let leftChildIndex = this.getLeftChildIndex(parentIndex);
                let rightChildIndex = this.getRightChildIndex(parentIndex);
    
                if (leftChildIndex < this.size() && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                    largestIndex = leftChildIndex;
                }
    
                if (rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                    largestIndex = rightChildIndex;
                }
    
                if (largestIndex === parentIndex) {
                    break;
                }
    
                this.swap(largestIndex, parentIndex);
                parentIndex = largestIndex;
            }
        }
    }

    let heap = new maxHeap()
    for (let num of nums) {
        heap.insert(num)
        if (heap.size() > k) heap.remove()
    }

    return heap.peek()
}


let n = 5, nums = [8, 5, 3, 8, 5], k = 3
let result = kthSmallestElementInAnArray(n, nums, k)
console.log(result)