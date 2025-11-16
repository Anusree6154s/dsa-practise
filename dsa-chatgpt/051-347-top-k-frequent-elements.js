// 347. top-k-frequent-elements


    // 1️⃣ Count frequency
    for (let n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    const heap = new MinHeap();

    // 2️⃣ Use the minheap of size k
    for (let [num, count] of freq.entries()) {
        heap.push({ num, freq: count }); // <-- CHANGE

        // Keep heap size = k
        if (heap.size() > k) {
            heap.pop();
    const freq = new Map();

    }
        }
            return this.heap.length;
        size() {

        }
            return this.heap.length > 0 ? this.heap[0] : null;
            // returns { num, freq }
        peek() {

        }
            }
                this.bubbleDown(smallest);
                this.swap(index, smallest);
            if (smallest !== index) {
