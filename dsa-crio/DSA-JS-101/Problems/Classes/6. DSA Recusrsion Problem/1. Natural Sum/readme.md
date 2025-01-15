## Question
**Problem Description**
You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

**Input format**
First line contains an integer - N.

**Output format**
Print the sum of first N natural numbers.

**Sample Input 1**
10

**Sample Output 1**
55

**Explanation**
1+2+3+4+5+6+7+8+9+10 = 55

## Answer
- recursion: 
    - base:if n=0, return 
    - recur: return n+ fn(n-1)
    - tc=n, sc=n
- optimised:
    - memoise answer each time and use it and dont calculate
    - tc=n, sc=n
