// 347. top-k-frequent-elements

// 🟦 FULL SOLUTION FOR TOP K FREQUENT ELEMENTS
var topKFrequent = function (nums, k) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
      return 2 * i + 1;
    }
    getRightChildIndex(i) {
      return 2 * i + 2;
    }

    push(value) {
      // value will be like: { num: 3, freq: 5 }  <-- CHANGE
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
      let parent = this.getParentIndex(index);
      // ⬇️ COMPARE USING freq INSTEAD OF value
      while (index > 0 && this.heap[index].freq < this.heap[parent].freq) {
        this.swap(index, parent);
        index = parent;
        parent = this.getParentIndex(index);
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return min; // returns { num, freq }  <-- CHANGE
    }

    bubbleDown(index) {
      let smallest = index;
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      // ⬇️ COMPARE USING freq
      if (
        left < this.heap.length &&
        this.heap[left].freq < this.heap[smallest].freq
      ) {
        smallest = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right].freq < this.heap[smallest].freq
      ) {
        smallest = right;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        this.bubbleDown(smallest);
      }
    }

    peek() {
      // returns { num, freq }
      return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
      return this.heap.length;
    }
  }

  const freq = new Map();

  // 1️⃣ Count frequency
  for (let n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const heap = new MinHeap();

  // 2️⃣ Use the minheap of size k
  for (let [num, count] of freq.entries()) {
    heap.push({ num, freq: count }); // <-- CHANGE

    // Keep heap size = k
    if (heap.size() > k) {
      heap.pop();
    }
  }

  // 3️⃣ Extract answers
  const result = [];
  while (heap.size() > 0) {
    result.push(heap.pop().num); // <-- EXTRACT NUM ONLY
  }

  return result;
};
