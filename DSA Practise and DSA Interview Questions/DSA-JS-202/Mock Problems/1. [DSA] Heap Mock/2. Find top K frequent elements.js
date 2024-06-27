// Problem Description
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input format
// First line contains an integer N - Number of elements in the array.

// Second line contains N integers - The array elements.

// Third line contains the integer k.

// Output format
// Print k integers in a single line.

// Sample Input 1
// 7

// 2 8 2 7 4 2 4

// 2

// Sample Output 1
// 2 4

// Explanation
// Frequency of 2: 3

// Frequency of 4: 2

// Frequency of 7: 1

// Frequency of 8: 1

// The two most frequent elements in the given array are 2 and 4.

// Constraints
// 1 <= N <= 10^5

// 1 <= k <= Number of unique elements in the array.

// 0 <= array elements <= 10^5

function topKFrequent(n, nums, k) {
    const frequencyMap = new Map()

    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    const frequencyArray = Array.from(frequencyMap.entries())

    //to sort in klogn time, minHeap
    class minHeap {
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
            //bring the smaller element up
            //start from last element
            //compare to parent
            //if self smaller, swap with parent, parent is the new self
            //do till self index ==0

            let currIndex = this.size() - 1
            while (currIndex > 0) {
                let parentIndex = this.getParentIndex(currIndex)
                let curr = this.heap[currIndex][1]
                let parent = this.heap[parentIndex][1]

                if (curr >= parent) {
                    break;
                }
                this.swap(currIndex, parentIndex)

                currIndex = parentIndex

            }
        }
        heapifyDown() {
            //to take larger elemnt from top to bottom. so we mark it as smallest
            //start from parent
            //comparet to left child and right child
            //if children smaller, then mark it as new smallest
            // if it still not equal to parent,then swap
            // the smallest index is paretn now
            //do till paretn is within heap limits

            let parentIndex = 0
            while (true) {
                let smallestIndex = parentIndex;
                let leftChildIndex = this.getLeftChildIndex(parentIndex);
                let rightChildIndex = this.getRightChildIndex(parentIndex);

                if (leftChildIndex < this.size() && this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]) {
                    smallestIndex = leftChildIndex;
                }

                if (rightChildIndex < this.size() && this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]) {
                    smallestIndex = rightChildIndex;
                }

                if (smallestIndex === parentIndex) {
                    break;
                }

                this.swap(smallestIndex, parentIndex);
                parentIndex = smallestIndex;
            }
        }
    }

    let heap = new minHeap()
    for (let num of frequencyArray) {
        heap.insert(num)
        if (heap.size() > k) heap.remove()
    }

    let result = []
    for (let [num, freq] of heap.heap) {
        result.push(num)
    }
    return result
}

let n = 7, nums = [2, 8, 2, 7, 4, 2, 4], k = 2
let result = topKFrequent(n, nums, k)
console.log(result)