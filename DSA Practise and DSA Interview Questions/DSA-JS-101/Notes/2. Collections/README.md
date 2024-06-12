## Topics

1. [Collections](#Collections)
2. [Arrays](#Arrays)
3. [Problems](#problems)

## 1. Collections <a id="Collections"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What are collections?</span>

- Collection **refers to a grouping** or **container that holds multiple items or elements** together.
- **Collections include various data structures or objects that allow for the storage**, retrieval, and manipulation of multiple items.
- **Arrays, Objects, Map, Set**, and other built-in structures can be considered collections.

## 2. Arrays <a id="Arrays"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What are Arrays?</span>

- Arrays are **data structures** used in programming **to store collections of items of the same type**.
- They **allow** you **to group multiple elements** of the same data type **under a single name** **and access them by their position or index** within the array.
- **Each element** in an array **occupies a specific position** and **can be accessed using an index starting from 0**.
- Arrays **can be one-dimensional, two-dimensional, or multi-dimensional** depending on the number of indices required to access an element.
- They are **widely used in** programming for tasks such as **storing lists of numbers, strings, or other data types**, **and for performing operations on these collections efficiently.**

#### <span style="color:#ff69b4;">Q2. Why do we need Arrays?</span>

For the following benefits:

- **Efficient storage**: Arrays **allow** you **to store multiple elements of the same data type under a single variable name**, reducing the need for creating separate variables for each element.
- **Sequential access**: **Elements** in an array **are stored in contiguous memory locations, making it easy to access them** sequentially **using index values**. This sequential access is often more efficient than accessing individual variables scattered throughout memory.
- **Random access**: Arrays allow for **efficient random access to elements based on their index**. This means you can directly access any element in the array using its index without having to traverse through other elements.
- **Iteration**: **Arrays facilitate iteration through a collection of elements using loops**. You **can easily perform operations on each element** of the array **by looping through it.**
- **Data organization**: Arrays **provide a structured way to organize and manipulate data**, making it easier to manage large datasets or collections of items.
- **Passing multiple values to functions**: **Arrays enable you to pass multiple values to functions using a single parameter**, which can simplify function definitions and calls.
  Implementing data structures: Many data structures such as stacks, queues, trees, and graphs are implemented using arrays as the underlying storage mechanism. Arrays provide the foundation for building more complex data structures.

#### <span style="color:#ff69b4;">Q3. What in index in Arrays?</span>

- **Index value represent the position of an element in an array**
- **Indexing starts from 0 and goes uptill (size of array - 1)**
- Example: To visit all elements of the array, we can through the index in the range [0, size - 1]

#### <span style="color:#ff69b4;">Q4. What are some common Array methods?</span>

Some common array methods in js are:

- `push()`: **Adds** one or more **elements to the end of an array**.
  - **Time Complexity: O(1)** (average)
  - Space Complexity: O(1)
- `pop()`: **Removes** the last **element from end of an array** and returns that element.
  - **Time Complexity: O(1)**
  - Space Complexity: O(1)
- `shift()`: **Removes** the **first element from start of an array** and returns that element. It **also updates the indices of the remaining elements**.
  - **Time Complexity: O(n)**
  - Space Complexity: O(1)
- `unshift()`: **Adds** one or more **elements to the beginning of an array**. It also updates the indices of existing elements.
  - **Time Complexity: O(n)**
  - Space Complexity: O(n)
- `concat()`: **Combines two or more arrays**.
  - **Time Complexity: O(n + m)** where **n is the length of the first array** and **m is the length of the second arra**y.
  - Space Complexity: O(n + m)
- `slice()`: **Extracts a section of an array** and returns a new array.
  - **Time Complexity: O(k)** where **k is the length of the extracted section.**
  - Space Complexity: O(k)
- `splice()`: **Adds or removes elements from an array at a specified index.**
  - **Time Complexity: O(k)** where **k is the number of elements to be added or removed.**
  - Space Complexity: O(k)
- `indexOf()`: **Returns the first index at which a given element can be found** in the array, **or -1 if it is not present.** **similar to linear search**
  - **Time Complexity: O(n)**
  - Space Complexity: O(1)
- `includes()`: **Checks whether an array includes a certain value among its entries.** **similar to linear search**
  - **Time Complexity: O(n)**
  - Space Complexity: O(1)
- `forEach()`: **Executes a provided function once for each array element.** Done by looping through every element
  - **Time Complexity: O(n)**
  - Space Complexity: O(1)

#### <span style="color:#ff69b4;">Q5. What are some of the basic operations that can be done on an array?</span>

1. **Access**:

   - `array[index]` (in most programming languages)

2. **Insertion**:

   - `push(element)` (adds element to the end)
   - `unshift(element)` (adds element to the beginning)
   - `splice(index, 0, element)` (adds element at a specific index)

3. **Deletion**:

   - `pop()` (removes and returns the last element)
   - `shift()` (removes and returns the first element)
   - `splice(index, 1)` (removes element at a specific index)

4. **Traversal**:

   - `for` loop
   - `forEach(callback)` method

5. **Search**:

   - `indexOf(element)` (returns the index of the first occurrence)
   - `find(callback)` (returns the first element that satisfies the condition)

6. **Sorting**:

   - `sort()` (sorts the array in place)
   - `sortedArray = array.sort()` (creates a new sorted array)

7. **Concatenation**:

   - `concat(otherArray)` method
   - `spread operator (...)` (for combining arrays)

8. **Splitting**:

   - `slice(startIndex, endIndex)` method

9. **Joining**:

   - `join(separator)` method

10. **Copying**:

    - `slice()` method (for shallow copy)
    - `JSON.parse(JSON.stringify(array))` (for deep copy, when elements are serializable)

11. **Rotation**:

    - Clockwise Rotation:
      - `array.unshift(array.pop())` (for one-step clockwise rotation)
    - Counter-clockwise Rotation:
      - `array.push(array.shift())` (for one-step counter-clockwise rotation)
    - Custom functions or algorithms for rotating by multiple steps.

12. **Reversal**:
    - `reverse()` method: Reverses the elements of the array in place.
    - Custom algorithms or loops for reversing elements manually.

#### <span style="color:#ff69b4;">Q6. Explain sort() in arrays?</span>
`sort()` **tries to convert the array elements to strings first** and **sorts lexicographically (dictionary order)**.

**Customization** of `sort()` is **done with a comparator function**. The comparator function takes in two arguments to compare (say `a` and `b`):
- If the function **returns a negative number**, then that **means to sort `a` before `b`.**
- If the function **returns a positive number**, that means to **sort `b` before `a`.**
- If the function **returns 0**, then it means to **keep the original ordering of `a` and `b`.**

    ```javascript
    nums.sort(function (a, b) {
        if (a < b) return -1; // or any negative value
        else if (a > b) return 1; // or any positive value
        else return 0;
    });
    ```

## 3. Problems <a id="problems"></a>
- Crio
    1. Find given element in the array
    2. Left Rotation