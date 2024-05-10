## Topics

1. [Time Complexity](#time)
2. [Space Complexity](#space)
3. [Debugging](#debugging)

## 1. Time Complexity <a id="time"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Time Complexity?</span>

- Time Complexity of an algorithm is the **time taken for an algorithm to complete its operation as a function of its data input size, n**.
- Standards - **Big O notation(Worst Case) (others - Big Theta(Average), Big Omega(Best))**
- Examples - O(1), O(n), O(n^2), O(n logn)

#### <span style="color:#ff69b4;">Q2. Why do we need Time Complexity?</span>

- Performance Comparison: Time complexity allows us **to compare performance of algorithms and determine which one is more efficient** for solving a particular problem.
- Predicting Execution Time: Time complexity **provides an estimation of how an algorithm's execution time will grow as the size of the input data increases**. This **helps** us predict the performance of an algorithm and **anticipate its behavior in real-world scenarios**.
- Optimization: Analyzing time complexity **helps identify** bottlenecks in algorithms and **areas where optimization efforts should be focused**.

#### <span style="color:#ff69b4;">Q3. On what is the speed of Algorithms or DSA Solutions dependent on?</span>

- Algorithmic Efficiency: Algorithms with **lower time complexity** (such as O(1), O(log n), O(n), etc.) generally **execute faster than** those with **higher time complexity** (such as O(n^2), O(2^n), etc.). Similarly, algorithms with \***\*lower space complexity\*\*** often **require less memory and may perform better**.
- Input Size: **As the input size increases**, algorithms with better time complexity may scale more efficiently, whereas **algorithms with poor time complexity may become increasingly slower**
- Hardware and Environment:The **hardware** on which the algorithm is executed **and the execution environment** (such as the **programming language, compiler optimizations, operating system,** etc.) also **affect the performance**.

#### <span style="color:#ff69b4;">Q3. What is Big O Notation?</span>

- **Way to measure how well our algorithm scales as the amount of data increases**
- It mainly **denotes the Worst Case Time complexity** when it takes the maximum amount of time

## 2. Space Complexity <a id="space"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Space Complexity?</span>

- Space Complexity of an algorithm is the **amount of memory needed for its operation as a function of its data input size, n.**
- Standards - Big O notation
- This space includes the inputs as well as additional space used by variables and DS

#### <span style="color:#ff69b4;">Q2. How to measure the memory usage of algorithms?</span>

- Theoretical Analysis: This involves **analyzing the algorithm's data structures** and operations to determine its memory complexity. This is usually done **using Big O notation**. **For example, if an algorithm uses an array of size n, its memory complexity might be O(n)**.

#### <span style="color:#ff69b4;">Q3. Why and when do we have to Trade off between Time and Space?</span>

- Depends on the constraints of a problems:
  - Either in less time by using more memory
  - Or using less memory but spending more time

## 3. Debugging <a id="debugging"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1.What is debugging?</span>
- Process where we find and fix errors/bugs in code


#### <span style="color:#ff69b4;">Q2.Why is debugging needed?</span>


#### <span style="color:#ff69b4;">Q3.What are the tyes of errors in programming?</span>
1. Compile Time/ Compilation Errors	
    - **Syntax errors** occur when the code violates the rules of the programming language. These errors are **detected** by the compiler or interpreter **during the compilation** or parsing phase.
    - Some common examples of this error include:
        - **missing semicolon**
        - **typo** in reserved/keyword
        - **incorrect braces closing**
        - mismatch/ absence in function return type and return statement
        - incorrect import
        - undeclared variables
2. Runtime Errors
    - Runtime errors **occur while the program is running**. They are often **referred to as exceptions or "bugs."** These errors typically **cause the program to terminate abruptly** unless they are caught and handled by the programmer.
        - **Division by zero**
        - Accessing **array out of its limit**
        - **Memory/stack overflow**/segmentation fault
        - Variable casting errors
3. Logical errors
    - Logical errors, also **known as semantic errors**, occur **when the program produces incorrect results due to flaws in its logic** or algorithm. Unlike syntax and runtime errors, logical errors **do not typically cause the program to crash or generate error** messages. Instead, they lead to unexpected behavior or incorrect output.
        - Array: **empty array**, array with 1 element
        - Integer: positive/negative, 0, **large overflowing cases**
        - Linked list: null head, one node list, odd/even list
        - Trees: one node tree, skewed tree, perfect binary tree
        - String: **empty string**, large string, all unique, all vowel, special character, alphanumeric string
        - Stack: underflow, overflow
        - Array: empty array, array with 1 element - Integer: positive/negative, 0, large overflowing cases - linked list: null head, one node list, odd/even list - trees: one node tree, skewed tree, perfect binary tree - string: empty string, large string, all unique, all vowel, special character, alphanumeric string - stack: underflow, overflow 
