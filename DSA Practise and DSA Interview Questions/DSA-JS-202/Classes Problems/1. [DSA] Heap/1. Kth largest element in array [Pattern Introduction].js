// Problem Description
// Given an unsorted array, find the Kth largest element in it.

// Note: The need is to find the Kth largest element in the sorted order.

// Input format
// First line has the integer N, representing the number of elements in the array

// Second line has N integers representing elements of the array

// Third line has K, which is the Kth largest element to be found

// Output format
// The Kth largest element value needs to be printed

// Constraints
// 1 <= N <= 1e5

// 0 <= Array Values <= 1e9

// 1 ≤ K ≤ N

// Sample Input 1
// 6

// 3 2 1 5 6 4

// 2

// Sample Output 1
// 5

// Explanation 1
// From the given input array, we have to find the second largest value. The first largest is 6 and the second largest is 5, which is the answer.

// Sample Input 2
// 9

// 3 2 3 1 2 4 5 5 6

// 4

// Sample Output 2
// 4

// Explanation 2
// From the given input array, we have to find the fourth largest value. The sorted order with the largest first is 6 5 5 4 3 3 2 2 1. The fourth largest here has the value 4.

function kthLargestElementInAnArray(n, nums, k) {
    // last k elements of minHeap will give max kth element 
    // we can use a min-heap of size k. so after iterating through th earray, minHEap will have kth largest ele as the head of the heap

    // Heap Approach: O(NlogK) More efficient for large arrays with small K (better time complexity).
    // alternate Sorting Approach: O(NlogN) Simpler to implement but has higher time complexity for large arrays.
    //where n is length of array and k is size of heap 

    //create minHeap
    class minHeap {
        constructor() {
            this.heap = []
        }

        getParentIndex(i) {
            return Math.floor((i - 1) / 2) //formula for finding parent of any element inheap
        }

        getLeftChildIndex(i) {
            return 2 * i + 1 //formula for left child
        }

        getRightChildIndex(i) {
            return 2 * i + 2 //formula for right child
        }

        insert(val) {
            this.heap.push(val)
            this.heapifyUp()
        }

        remove() {
            //1. if heap is empty return null
            //2. if heap has just 1 element, pop heap
            //3. if heap has more elements, we will swap first and last, then pop() (to save tc)4
            if (this.size() == 0) return null
            if (this.size() == 1) return this.heap.pop()
            this.swap(this.size() - 1, 0)
            let val = this.heap.pop()
            this.heapifyDown()
            return val
        }

        size() {
            return this.heap.length
        }

        peek() {
            return this.heap[0]
        }

        swap(index1, index2) {
            [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
        }

        heapifyUp() {
            //get index of last heap elemetn
            //get parent of that index
            //while index >0 (heap has more than 1 element): 
            //compare index and parent values, if p>in, swap
            //new index become parent value
            let index = this.heap.length - 1
            while (index > 0) {
                let parentIndex = this.getParentIndex(index)
                let parent = this.heap[parentIndex]
                let self = this.heap[index]
                if (parent > self) this.swap(parentIndex, index)
                index = parentIndex
            }
        }



        heapifyDown() {
            //parent should be smaller than children

            //while the la
            //so we set a parent variable, and get its children indices
            // we compare tehir values and if either of them is smaller we swap parent with that smaller element (given that child exist in the heap range)
            //the smallest child among them becomes the new parent
            //if theera re no no new smallest we break the loop
            let index = 0
            let length = this.heap.length
            while (true) {
                let smallest = index //we start comparing smallest at the index
                let leftChildIndex = this.getLeftChildIndex(index)
                let rightChildIndex = this.getRightChildIndex(index)

                //first check if any child exist larger than parent
                if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) smallest = leftChildIndex; //check if left child is larger tahn parent
                if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) smallest = rightChildIndex;// check if right child is larger than left child

                //if no child break, else swap
                if (smallest == index) break; // if smallest is same as index, end the loop

                // swap the index(aka parent) with th smallest
                this.swap(index, smallest)

                index = smallest//we move to the next smallest value to check its children
            }
        }
    }


    //aply heap to problem
    let heap = new minHeap()
    for (let i = 0; i < n; i++) {
        heap.insert(nums[i])
        if (heap.size() > k) {
            heap.remove()
        }
    }


    return heap.peek()
}

let ans = kthLargestElementInAnArray(6, [3, 2, 1, 5, 6, 4], 2)
console.log(ans)