## Topics

1. [Time Complexity](#time)
2. [Space Complexity](#space)

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

#### <span style="color:#ff69b4;">Q2. How to measure the memory usage algorithms?</span>

#### <span style="color:#ff69b4;">Q3. Why and when do we have to Trade off between Time and Space?</span>
- Depends on the constraints of a problems:
    - Either in less time by using more memory 
    - Or using less memory but spending more time




