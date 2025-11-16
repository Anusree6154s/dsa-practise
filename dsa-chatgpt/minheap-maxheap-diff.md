```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return 2 * i + 1;
  }

  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // 🔼 For MaxHeap we bubble UP while child > parent
  // (MinHeap would check: child < parent)
  bubbleUp(index) {
    while (index > 0) {
      let parent = this.parentIndex(index);

      // DIFFERENT for MinHeap → change > to <
      if (this.heap[index] <= this.heap[parent]) break;

      this.swap(index, parent);
      index = parent;
    }
  }

  // 🔽 For MaxHeap we bubble DOWN by picking the LARGEST child
  // (MinHeap would pick the SMALLEST child)
  bubbleDown(index) {
    const size = this.heap.length;

    while (true) {
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      let largest = index;

      // DIFFERENT for MinHeap → check child < current
      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      // DIFFERENT for MinHeap → check child < current
      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      // STOP condition is also opposite for MinHeap
      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  // SAME for both heaps
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // SAME for both heaps
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let max = this.heap[0]; // MinHeap would call this extractMin
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return max;
  }

  // MinHeap would call this peekMin
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }
}
```
