## Topics<a id="top"></a>

1. [Recursion](#Recursion)

## 1. Recursion <a id="Recursion"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Recursion?</span>
- Recursion is **a method where the solution to a problem depends on solutions to smaller instances of the same problem.** 
- **A method (function) can call itself in order to solve the problem.**

#### <span style="color:#ff69b4;">Q2. What are ssome real world exmaples of Recursion?</span>
- Counting number of rows in a movie theater
- Searching for a word in dictionary

#### <span style="color:#ff69b4;">Q3. Why do we need Recursion?</span>
- Recursive solutions are **often simpler and easier to understand and implement than iterative solutions.**
- Complex real world problems can be easily represented using recursion.
- Recursion is **well-suited for processing and manipulating data structures with recursive properties**, such as linked lists, trees, and graphs.
- Recursion encourages a recursive mindset, which is a valuable problem-solving skill applicable to various domains. It trains the ability to break down complex tasks into simpler ones and solve them independently.

#### <span style="color:#ff69b4;">Q4. When to use Recursion?</span>
-  Use **when the problem can be broken down into smaller, repetitive problems.**
- It is **especially good for working on things that have many possible branches and are too complex for an iterative approach.**


#### <span style="color:#ff69b4;">Q5. Is recursion better than iteration??</span>
- Problems that we solve using recursion can also be solved iteratively!
- **Some problems requires multiple nested loops where it is easier to implement a recursive solution**
- However, **for most of the cases, recursive solutions consume more space** as compared to iterative solutions.
- So, 
    - **Recursion** is often preferred **when code size is small and time complexity isn't a concern.** 
    - **Iteration** is often preferred **when code size is large and time complexity needs to be managed.**

#### <span style="color:#ff69b4;">Q6. What are teh key aspects of a recursive function?</span>
1. Base/Terminating condition
    - The case for which the solution can be stated non‐recursively/directly/trivially.
2. Recursive condition
    - The case for which the  solution is expressed in terms of a smaller version of itself. 
3. Function signature
    - Return type
    - Input parameter
    ```javascript
    //function signature
    /**
     * Calculates the factorial of a non-negative integer.
     * @param {number} n - The integer to calculate the factorial of.
     * @returns {number} - The factorial of the input integer.
     */

    function factorial(n) {
        if (n === 0 || n === 1) {// Base case
            return 1;
        }
        else {
            return n * factorial(n - 1); // Recursive case
        }
    }
    ```

### <u>Problems</u>
1. Sum of numbers up to n (Sum of first N natural numbers)
2.  Find the nth fibonacci number 
    > ***Fibonnacci***: 
    > - *It’s a series where sum of nth term is equal to sum of previous 2 terms*
    > - *F(n) = F(n-1) + F(n-2) for each n >= 2*
    > - *F(1) =0*
    > - *F(2) = 1*
    > - *Series: 0, 1, 1, 2, 3, 5, 8, 13, 21  . . .*