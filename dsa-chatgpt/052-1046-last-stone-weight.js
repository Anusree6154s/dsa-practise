// 1046. last-stone-weight

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // Using your existing MaxHeap
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        parentIndex(i) {
            return Math.floor((i - 1) / 2);
        }

        leftChildIndex(i) {
            return 2 * i + 1;
        }

        rightChildIndex(i) {
            return 2 * i + 2;
        }

        // 🔼 Bubble up after insert
        bubbleUp(index) {
            while (index > 0) {
                let parent = this.parentIndex(index);

                // ❌ MinHeap: change > to <
                if (this.heap[index] <= this.heap[parent]) break;

                this.swap(index, parent);
                index = parent;
            }
        }

        // 🔽 Bubble down after removing max
        bubbleDown(index) {
            const size = this.heap.length;

            while (true) {
                let left = this.leftChildIndex(index);
                let right = this.rightChildIndex(index);
                let largest = index;

                // ❌ MinHeap: change > to < for comparisons
                if (left < size && this.heap[left] > this.heap[largest]) {
                    largest = left;
                }

                if (right < size && this.heap[right] > this.heap[largest]) {
                    largest = right;
                }

                if (largest === index) break;

                this.swap(index, largest);
                index = largest;
            }
        }

        insert(value) {
            this.heap.push(value);
            this.bubbleUp(this.heap.length - 1);
        }

        extractMax() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();

            let max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);

            return max;
        }

        peek() {
            return this.heap.length === 0 ? null : this.heap[0];
        }
    }

    const maxHeap = new MaxHeap();

    // Insert all stones
    for (const stone of stones) maxHeap.insert(stone);

    while (maxHeap.heap.length > 1) {
        let first = maxHeap.extractMax();  // heaviest stone
        let second = maxHeap.extractMax(); // second heaviest

        if (first !== second) {
            // insert the difference back
            maxHeap.insert(first - second);
        }
        // if equal, both destroyed → do nothing
    }

    return maxHeap.heap.length === 0 ? 0 : maxHeap.peek();



};
