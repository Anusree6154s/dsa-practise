## Topics

1. [2 Types of search algorithms](#search)
2. [Linear Search](#linear)
3. [Binary Search](#binary)
4. [Ternary Search](#ternary)

## 1. Two Types of search algorithms <a id="search"></a>

1. Linear Search (Sequential Search)
2. Binary Search

- Visualisation:
  ![alt text](binary-and-linear-search-animations.gif)
  ![alt text](image.png)

## 2. Linear Search <a id="linear"></a>

- Simplest Approach
- Time Complexity - **O(n)**
- **Iterative** in nature
- Template
    ```javascript
    function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i; // Return index if target found
            }
        }
        return -1; // Return -1 if target not found
    }
    ```

## 3. Binary Search <a id="binary"></a>

1. It’s a **divide and conquer algorithm** to solve problems and for data retrieval.
2. The group/**array** of elements **have to be SORTED!**
3. Time Complexity
   1. Best - O(1)
   2. Average - **O(logn)**
   3. Worst - O(n)
4. template:

   ```javascript
   function binarySearch(arr, target) {
     let left = 0;
     let right = arr.length - 1;

     while (left <= right) {
       let mid = Math.floor((left + right) / 2);

       if (arr[mid] === target) {
         return mid; // Target found, return index
       } else if (arr[mid] < target) {
         left = mid + 1; // Continue search in the right half
       } else {
         right = mid - 1; // Continue search in the left half
       }
     }

     return -1; // Target not found
   }
   ```

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. Explain Binary Search?</span>

1. **Start** the search **with the middle element of the array**
2. If the **target number = middle element**, search ends with Success. (**return mid value**)
3. Else if array size = 1, the search ends with Failure. (edge case)
4. **Else if target number < middle element**, search the left half of the array **(left=mid+1)**
5. **Else target number is > middle element**, search the right half of the array (**right=mid-1**)
6. Start over with either the left half or right half of the array. Repeat till Success or Failure

#### <span style="color:#ff69b4;">Q2. Why is complexity of Binary Search O(log2n)?</span>

- That comes from the number of times the loop needs to run to search for the target element in the worst case.
- **Each time the loop runs, the range gets reduced by half** (effectively division by 2). **We need (log2n) iterations of the loop to bring the range size down to 1 element**. Remember that log is base 2 and not base 10.

### <u>Real World Examples</u>

Since Binary search is a quick way for searching through sorted databases, it is **often used in debugging**. Suppose you have 100 versions of a code, each of which is different from the other. The 1st version displays the correct output, but the 100th version doesn’t.

An **efficient way to find the broken version** would be to run a binary search through all the versions. The **versions are logged in a Version Control System in sorted order**, so don’t worry about that. Check out the code in the 50th release, build it, and see if the bug is still there.

**Continue dividing until you discover when the bug was introduced**. This approach comes in quite handy especially if you make small commits.

### <u> Binary Search Problems</u>
- chatgpt 
  1. Working on **sorted array** - should consider Binary Search as an option.
    1. Find number of occurrences of an element in a large search space (Crio)
    2. First or last occurrence of an element in a large search space (Crio)
  2. Come up with the **Upper and Lower Bound values**, or Problems related to “Maximise the minimum” or “Minimize the maximum” something are usually solved using Binary Search (optimization problems)
    1. Koko eating bananas (Leetcode)
    2. Square root of a number (Leetcode)
        Search for an integer N in a sorted Matrix
  3. Find the median of 2 sorted arrays
  4. Find the first and last position of element in sorted array (or range of the element or number of occurrences)
  5. Find the duplicate in a array containing n + 1 integers where each integer is between 1 and n
    OR Find an integer that appears more than once in the array
  6. Given a sorted matrix, find the overall median of the matrix
  7. Find the Kth smallest element in a sorted matrix
  8. Compute square root of an integer (Hint: The square root of an integer >= 2 is always smaller than x/2)
  9. Find the element that occurs once in a sorted array where all other elements occur twice
  10. Given a sorted array of strings that is interspersed with empty strings, find the location of a given string
  11. Search for a number in a sorted array where we don’t know whether array is in ascending or descending order
  12. Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given key
      OR Given an array of numbers in ascending order, find an element that has the minimum difference with the given key
  13. Find the maximum value in a given Bitonic array (array which first increases then decreases and all elements are unique)

## 3. Ternary Search <a id="ternary"></a>

- **NOT BETTER** than binary search
- why?
  - **Ternary search** is **similar to binary search** (where we divide the array into two parts), **but** in this algorithm, **we divide** the given array **into three parts** and determine which has the key (searched element) (source: www.geeksforgeeks.org)
  - If you apply **binary search**, you have **log2(n) + O(1)** comparisons.
  - If you apply **ternary search**, you have **2.log3(n) + O(1)** comparisons, as in each step, you need to perform 2 comparisons to cut the search space into three parts.
  - Doing the math, **2 x (log(2)/log(3)) > 1**
  - Hence, we actually get **more comparisons with ternary search**. Binary Search performs better.
