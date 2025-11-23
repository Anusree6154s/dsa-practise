// 295. find-median-from-data-stream


        push(val) {
            this.heap.push(val)
            this.bubbleUp(this.heap.length - 1)
        }

        bubbleUp(index) {
            while (index > 0) {
                let parent = this.getParent(index)
                if (this.heap[index] <= this.heap[parent]) break //parent must be larger than current index
                this.swap(index, parent)
                index = parent
            }

        }

        bubbleDown(index) {
            while (true) { //asssume curr index to be largest and find largest till curr index is still the largest
                let left = this.getLeft(index)
                let right = this.getRight(index)
                let largest = index

                if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left
                if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right

                if (largest === index) break
                this.swap(largest, index)
                index = largest
            }
        }

        pop() {
            if (this.heap.length == 0) return null
            if (this.heap.length == 1) return this.heap.pop()

            let max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.bubbleDown(0)

            return max
        }

        peek() {
            return this.heap[0]
        }
    }

    class MinHeap extends MaxHeap {
        bubbleUp(i) {
            while (i > 0) {
                let p = this.getParent(i)
                if (this.heap[p] <= this.heap[i]) break
                this.swap(p, i)
                i = p
            }
        }

        bubbleDown(i) {
            let n = this.heap.length
            while (true) {
                let l = this.getLeft(i)
                let r = this.getRight(i)
                let smallest = i

                if (l < n && this.heap[l] < this.heap[smallest]) smallest = l
                if (r < n && this.heap[r] < this.heap[smallest]) smallest = r

                if (smallest == i) break

                this.swap(smallest, i)
                i = smallest
            }
        }
    }

    this.left = new MaxHeap() // put small numbers in it, to get largest among small numbers
    this.right = new MinHeap() // put larger numbers in it. to get smallest among large numbers
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (!this.left.peek() || num <= this.left.peek()) {
        this.left.push(num)
    } else {
        this.right.push(num)
    }

    // balance - move them from one to another
    if (this.left.heap.length > this.right.heap.length + 1) {
        this.right.push(this.left.pop())
    }

    if (this.right.heap.length > this.left.heap.length) {
        this.left.push(this.right.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.left.heap.length > this.right.heap.length) {
        return this.left.peek() // odd count. median is on left
    }
        }
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
        swap(i, j) {

        getRight(i) { return 2 * i + 2 }
        getLeft(i) { return 2 * i + 1 }
        getParent(i) { return Math.floor((i - 1) / 2) }

        }
            this.heap = []
        constructor() {
    class MaxHeap {
var MedianFinder = function () {

