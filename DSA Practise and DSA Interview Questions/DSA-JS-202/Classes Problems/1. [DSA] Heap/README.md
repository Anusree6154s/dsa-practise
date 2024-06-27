
### Heap

- **Representation**: A heap is a complete binary tree represented as an array.
- **Types**:
    1. **Min-Heap**: The root element is the smallest in the heap. Each parent node is smaller than or equal to its children.
    2. **Max-Heap**: The root element is the largest in the heap. Each parent node is larger than or equal to its children.
- **Formulas**:
    1. **Parent Index**: `Math.floor((index - 1) / 2)`
    2. **Left Child Index**: `2 * index + 1`
    3. **Right Child Index**: `2 * index + 2`
- **Properties**:
    1. **Complete Binary Tree**: All levels are fully filled except possibly the last level, which is filled from left to right.
- **Common Operations**:
    1. **Basic Index Operations**: `getParentIndex`, `getLeftChildIndex`, `getRightChildIndex`
    2. **Heap Operations**:
        - **Insert**: Add a new element and maintain the heap property.
        - **RemoveMin** (for min-heap) / **RemoveMax** (for max-heap): Remove and return the root element, then restore the heap property.
        - **Peek**: Return the root element without removing it.
        - **Swap**: Swap two elements in the heap.
        - **Size**: Return the number of elements in the heap.
    3. **Heapify Operations**:
        - **Heapify Up**: Move an element up to restore the heap property after insertion.
        - **Heapify Down**: Move an element down to restore the heap property after removal.

- **Applications**:
    - **Priority Queues**
    - **Heap Sort**
    - **Graph Algorithms** (e.g., Dijkstra's shortest path)
    - **Merging k Sorted Arrays**
    - **Median Maintenance**

