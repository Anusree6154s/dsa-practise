// 023. merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // use min heap to pop the smallest each time

    class MinHeap {
        constructor() {
            this.heap = []
        }

        getParentIndex(index) {
            return Math.floor((index - 1) / 2)
        }

        getLeftChildIndex(index) {
            return 2 * index + 1
        }

        getRightChildIndex(index) {
            return 2 * index + 2
        }

        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }

        bubbleUp(index) {
            // purpose: to bring recently added value to top if small
            while (index > 0) {
                // get parent of current index
                let parentIndex = this.getParentIndex(index)
                if (this.heap[parentIndex].val <= this.heap[index].val) break
                this.swap(parentIndex, index)
                // new index is parent index
                index = parentIndex
            }
        }

        bubbleDown(index) {
            // purpose: after the smallest is popped from the heap
            // the next smallest value needs to be brought on top from bottom
            let length = this.size()

            while (true) {
                let left = this.getLeftChildIndex(index)
                let right = this.getRightChildIndex(index)
                let smallest = index // currently we assume the first index is the smallest
                if (left < length && this.heap[smallest].val > this.heap[left].val) {
                    smallest = left
                }
                if (right < length && this.heap[smallest].val > this.heap[right].val) {
                    smallest = right
                }

                if (smallest == index) break //break if index is actually smallest

                this.swap(index, smallest) //else swap
                index = smallest // and new index is the index of new smallest value
            }
        }

        push(val) {
            // add new value and heap up
            this.heap.push(val)
            this.bubbleUp(this.heap.length - 1)
        }

        pop() {
            if (this.size() === 0) return null

            let min = this.heap[0]
            let end = this.heap.pop()

            if (this.size() > 0) {
                this.heap[0] = end
                this.bubbleDown(0)
            }

            return min
        }

        size() {
            return this.heap.length
        }
    }


    const heap = new MinHeap()
    for (let list of lists) {
        if (list) heap.push(list)
    }


    const dummy = new ListNode()

    let curr = dummy
    while (heap.size() > 0) {
        let smallest = heap.pop()
        curr.next = smallest
        curr = curr.next

        if (smallest.next) {
            heap.push(smallest.next)
        }
    }

    return dummy.next
};
