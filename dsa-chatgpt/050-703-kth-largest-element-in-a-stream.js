// 703. kth-largest-element-in-a-stream

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    // using min-heap bcz it stores k large elements with 
    // smallest among them at top (which is our ans)

    class MinHeap {
        constructor() {
            this.heap = []
        }

        getParentIndex(i) {
            return Math.floor((i - 1) / 2)
        }

        getLeftChildIndex(i) {
            return 2 * i + 1
        }

        getRightChildIndex(i) {
            return 2 * i + 2
        }

        bubbleUp() {
            // bring recently added value up if small

            //get parent compare given index with parent. 
            // if parent larger, then swap
            let index = this.heap.length - 1 // hardcoding starting index here
            while (index > 0) {
                let parent = this.getParentIndex(index)
                if (this.heap[parent] <= this.heap[index]) break
                this.swap(index, parent)
                index = parent
            }

        }

        bubbleDown() {
            // rearrange heap to bring down large elements 
            // if on top


            //start with parent, 
            // compare curr index with left and right child
            let index = 0 // (we are hardcoiding parent curretnly)
            while (true) {
                let left = this.getLeftChildIndex(index)
                let right = this.getRightChildIndex(index)
                let smallest = index

                if (left < this.size() && this.heap[smallest] > this.heap[left]) smallest = left
                if (right < this.size() && this.heap[smallest] > this.heap[right]) smallest = right

                if (smallest === index) break
                this.swap(index, smallest)
                index = smallest

            }
        }

        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }

        peek() {
            return this.heap[0]
        }

        push(val) {
            this.heap.push(val)
            this.bubbleUp()
        }

        pop() {
            if (this.size() == 1) return this.heap.pop()

            const top = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.bubbleDown() // push down the new elemnt if big
            return top
        }

        size() {
            return this.heap.length
        }
    }

    this.k = k;
    this.minHeap = new MinHeap();

    for (let num of nums) {
        this.add(num);
    }


};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minHeap.push(val)
    if (this.minHeap.size() > this.k) this.minHeap.pop()
    return this.minHeap.peek()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
