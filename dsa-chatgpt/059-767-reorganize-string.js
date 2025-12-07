// 767. reorganize-string

/**
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function (s) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
        insert(val) {
            this.heap.push(val);
            this.heapifyUp(this.heap.length - 1);
        }
        extractMax() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();

            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
            return max;
        }
        size() {
            return this.heap.length;
        }

        heapifyUp(i) {
            while (i > 0) {
                let p = this.getParent(i);
                if (this.heap[i][1] <= this.heap[p][1]) break;
                this.swap(i, p);
                i = p;
            }
        }

        heapifyDown(i) {
            const size = this.heap.length;
            while (true) {
                let l = this.getLeftChild(i);
                let r = this.getRightChild(i);
                let largest = i;

                if (l < size && this.heap[l][1] > this.heap[largest][1])
                    largest = l;
                if (r < size && this.heap[r][1] > this.heap[largest][1])
                    largest = r;

                if (largest === i) break;

                this.swap(largest, i);
                i = largest;
            }
        }

        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }

        getParent(i) {
            return Math.floor((i - 1) / 2);
        }
        getLeftChild(i) {
            return 2 * i + 1;
        }
        getRightChild(i) {
            return 2 * i + 2;
        }
    }

    let map = new Map();
    let result = "";

    for (let letter of s) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }

    const heap = new MaxHeap();

    for (let [char, freq] of map) {
        heap.insert([char, freq]);
    }

    while (heap.size() > 1) {
        let [char1, freq1] = heap.extractMax();
        let [char2, freq2] = heap.extractMax();

        result += char1 + char2;

        if (freq1 - 1 > 0) heap.insert([char1, freq1 - 1]);
        if (freq2 - 1 > 0) heap.insert([char2, freq2 - 1]);
    }

    if (heap.size() === 1) {
        let [char, freq] = heap.extractMax();
        if (freq > 1) return "";
        result += char;
    }

    return result;
};
