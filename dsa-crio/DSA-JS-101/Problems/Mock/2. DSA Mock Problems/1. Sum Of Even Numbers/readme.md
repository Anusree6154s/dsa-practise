## Question
**Problem Description**
You are required to implement a recursive function that calculates the sum of even numbers from 1 to a given positive integer n.

**Input format**
The input consists of a single integer n (1 <= n <= 10^4), representing the upper limit of the range.

**Output format**
Return the sum of even numbers from 1 to n.

**Sample Input 1**
10

**Sample Output 1**
30

**Explanation**
The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. The sum is 2+4+6+8+10 = 30.

## Answer
- base: ifn==0, return 0
    - recur: if even, return n+f(n-2), else return f(n-1)
    - tc=n, sc=n
- optimised:
  - sumofeven numbers = `(n/2) * [(n/2) +1]` ->[variation of `n*(n+1)/2`]
  - tc=1, sc=1