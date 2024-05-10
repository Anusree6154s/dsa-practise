## Topics

1. [Sorting](#Sorting)
2. [Types of Sorting Techniqes](#types)
3. [Comparison](#Comparison)

## 1. Sorting <a id="Sorting"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Sorting in Javascript and why is it needed?</span>

- Sorting is a **technique to arrange items in order**
- This comes in handy for a lot of applications
- Sorting **aids systematic searching**
- Few real world applications of Sorting
  - **Bubble sorting** is used **in programming TV** to sort channels based on audience viewing time!
  - **Databases use** external **Merge sort** to sort sets of data that are too large to be loaded entirely into memory!
  - **Sports scores** are quickly **organized by Quick sort** algorithm in real-time!!

#### <span style="color:#ff69b4;">Q2. What are the types of Sorting in Javascript?</span>

- **Comparison-based sorting**:
  - In comparison-based sorting techniques, a comparator is defined to compare elements or items of a data sample. This comparator defines the ordering of elements.
  - Examples are: **Bubble Sort, Merge Sort**.
- **In-Place** vs **Not-in-Place** Sorting:
  - **In-place sorting** techniques in data structures **modify the ordering of array elements within the original array**. Examples of In place sorting techniques are: **Bubble Sort, Selection Sort.**
  - On the other hand, **Not-in-Place sorting** techniques **use an auxiliary data structure to sort the original array.** Some examples of Not in Place sorting algorithms are: **Merge Sort, Quick Sort.**

### <u>Problems</u>
- chatgpt
  1. **Sorting an Array**:
    - Implementing sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, etc., to sort an array of numbers or strings.
  2. **Sort Colors**:
    - Given an array with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
  3. **Kth Largest Element in an Array**:
    - Given an unsorted array of integers, find the kth largest element in the array.
  4. **Top K Frequent Elements**:
    - Given an integer array, return the k most frequent elements.
  5. **Sort Characters By Frequency**:
    - Given a string, sort it in decreasing order based on the frequency of characters.
  6. **Wiggle Sort**:
    - Given an unsorted array, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
  7. **Meeting Rooms II**:
    - Given an array of meeting time intervals consisting of start and end times [[s1, e1], [s2, e2], ...], find the minimum number of conference rooms required.
  8. **Find the Duplicate Number**:
    - Given an array containing n + 1 integers where each integer is between 1 and n (inclusive), find the duplicate number.
  9. **Insertion Sort List**:
    - Sort a linked list using insertion sort.
  10. **Find All Duplicates in an Array**:
      - Given an array of integers, 1 ≤ a[i] ≤ n (n is the size of the array), some elements appear twice and others appear once. Find all the elements that appear twice in the array.

## 2. Types of Sorting Techniques <a id="types"></a>

### 1. Bubble Sort:

- Bubble sort repeatedly steps through the list, **compares adjacent elements, and swaps them** if they are in the wrong order
- Time Complexity:
  - Best Case: O(n)
  - Average Case: O(n^2)
  - **Worst Case: O(n^2)**
- **Space Complexity - O(1)**
- Template:

  ```javascript
  function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }
  ```
- Visualisation:
    ![](./images/Bubble-Sort-2.gif)
    

### 2. Selection Sort:

- Selection sort **repeatedly finds the minimum element from the unsorted portion of the array and moves it to the beginning**.
- Time Complexity
  - Best Case: O(n^2)
  - Average Case: O(n^2)
  - **Worst Case: O(n^2)**
- **Space Complexity - O(1)**
- Template
  ```javascript
  function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // Swap the minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }

    return arr;
  }
  ```
- Visualisation
    ![](./images/Selection-Sort.gif)

### 3. Insertion Sort:

- Insertion sort **builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position.**
- Time Complexity
  - Best Case: O(n)
  - Average Case: O(n^2)
  - **Worst Case: O(n^2)**
- **Space Complexity - O(1)**
- Template

  ```javascript
  function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;

      // Move elements of arr[0..i-1], that are greater than current,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  }
  ```
- Visualisation
    ![](./images/Insertion-Sort.gif)

### 4. Merge Sort:

- Merge sort is a **divide-and-conquer algorithm** that **recursively divides the array into halves, sorts each half, and then merges the sorted halves**.
- Time Complexity
  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - **Worst Case: O(n log n)**
- **Space Complexity - O(n)**
- Template

  ```javascript
  function mergeSort(arr) {
    // Base case: If the array has 0 or 1 elements, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);

    // Divide the array into two halves
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }

  function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them into the result array
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    // Append any remaining elements from the left array
    while (leftIndex < leftArr.length) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    }

    // Append any remaining elements from the right array
    while (rightIndex < rightArr.length) {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }

    return result;
  }
  ```
- Visualisation
    ![](./images/Merge-Sort.gif)

### 5. Quick Sort:

- Quick sort is also a **divide-and-conquer algorithm** that **partitions the array into two subarrays around a pivot element**, **recursively sorts the subarrays, and then combines them**.
- Time Complexity
  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - **Worst Case: O(n^2)**
- **Space Complexity - O(log n)**
- Template

  ```javascript
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) {
        continue;
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
  }
  ```
- Visualisation
    ![](./images/Quick-Sort-1.gif)

## 3. Comparison <a id="Comparison"></a>

> **Stability** : _Stable if the order of elements in an array will be retained after sorting, Not-stable if it will not be retained_

From 1 to 5 , with 1 being most preferred and 5 being least. From Merge sort to Selection Sort:
| # | Sorting Algorithm | Best Time Complexity | **Average Time Complexity** | Worst Time Complexity | **Space Complexity** | Stability |
|---|-------------------|----------------------|-----------------------------|-----------------------|----------------------|-----------|
| 1 | Merge Sort | Ω(n log n) | **Θ(n log n)** | O(n log n) | **O(n)** | Stable |
| 2 | Quick Sort | Ω(n log n) | **Θ(n log n)** | O(n^2) | **O(log n)** | Not stable|
| 3 | Insertion Sort | Ω(n) | **Θ(n^2)** | O(n^2) | **O(1)** | Stable |
| 4 | Bubble Sort | Ω(n) | **Θ(n^2)** | O(n^2) | **O(1)** | Stable |
| 5 | Selection Sort | Ω(n^2) | **Θ(n^2)** | O(n^2) | **O(1)** | Not stable|



