**Problem Description**
Given a number n, you have to calculate the factorial of that number.

**Input format**
First line contains an integer - n

**Output format**
Print the factorial of the given number.

**Sample Input 1**
3

**Sample Output 1**
6

**Explanation**
3! = 3.2.1 = 6

**Constraints**
0 <= n <= 10

## Answer

- factorial-> base: if n=1, ret 1
    - recur: retun n*f(n-1)
    - tc=n, sc=n
- optimised:
    - memoise answer each time and use it and dont calculate
    - tc=n, sc=n