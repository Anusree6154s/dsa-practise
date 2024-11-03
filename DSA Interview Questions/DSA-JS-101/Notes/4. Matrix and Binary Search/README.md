## Topics<a id="top"></a>

1. [Matrix](#Matrix)
2. [Binary Search](#bin)

## 1. Matrix <a id="Matrix"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a matrix?</span>

- They are **2D arrays, with a grid like structure**
- It is like **1D array stacked on top of each other**
- They **have the concept of rows and columns**

#### <span style="color:#ff69b4;">Q2. What is a matrix needed?</span>

- They are used in places **where grid representation is needed**
- Matrices are **heavily used in real life, example board games**
- It is **used in graph, backtracking, dynamic programming problems** **that need a grid representation**

#### <span style="color:#ff69b4;">Q3. Explain different ways of matrix traversal and how it is done?</span>

1.  Simple Matrix Print

    1. **Approach 1:** For each row, print all the columns.
    2. **Approach 2:** For each column, print all the rows.

2.  Print Content of a Single Row

    - Row index can iterate over the valid row range, while the column index remains constant.

3.  Print Content of a Particular Column

    - Column index can iterate over the valid row range, while the row index remains constant.

4.  Diagonal Traversal
    1. **Approach 1 (O(N^2)):** Traverse the entire matrix, which takes O(N^2) time.
    2. **Approach 2 (O(N)):** Hinting that there might be a better approach since we already know the cells we want to visit.

### <u>Problems</u>

- Crio
  1. Check if matrix is a magic square

## 2. Binary Search <a id="bin"></a>

[Top](#top)

### <u>Questions</u>
#### <span style="color:#ff69b4;">Q1. What is Binary Search?</span>
- Binary Search is defined as a **searching algorithm used in a sorted array by repeatedly dividing the search interval in half**. 
- The idea of binary search is to use the information that the array is sorted and **reduce the time complexity to O(log N).** 


#### <span style="color:#ff69b4;">Q2. Why do we need Binary Search?</span>
- It is **extremely fast in searching** using Binary Search
- **Reduced time complexity** in comparison to linear search
- Time complexity: O(log N). (In comparison, TC for Linear Search is O(n))
- Binary search is **efficient, easy to understand, and doesn't require extra space**.

#### <span style="color:#ff69b4;">Q3. Where can we use Binary Search?</span>
- Binary search's most common application is **searching for a particular element in a sorted array.**
- example: It's commonly used to find an item in an array, l**ike a phone book, dictionary, or large dataset.**

#### <span style="color:#ff69b4;">Q4. What are teh conditions for useing Binary Search?</span>
To apply Binary Search algorithm:
- -The **data structure must be sorted.**
- **Access to any element** of the data structure **takes constant time.**

#### <span style="color:#ff69b4;">Q5. How to do Binary Search?</span>
1. Step 1
    - Set the search space equal to sorted array
Find a target element in a sorted array
2. Step 2
    - Compare the target with the middle element
    - Case 1: Target element = middle element
        - Return the index
    - Case 2: Target element < middle element
        - Discard the middle element and all the elements on the right of it
    - Case 3: Target element > middle element
        - Discard the middle element and all the elements on the left of it
3. Step 3
    - If the target was not found and there is no more elements left to search, return -1

### <u>Problems</u>

- Crio
  1. Find element using Binary Search