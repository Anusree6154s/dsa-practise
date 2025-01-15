## Question

**Problem Description**
In Tribonacci sequence, the nth term Tn, is defined as follows:

T0 = 0,

T1 = 1,

T2 = 1,

and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.

Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …

Given n, return the value of Tn.

**Input format**
A single line containing an Integer, N.
Output format
The Nth integer in the tribonacci sequence.

**Constraints**
0 <= n <= 15

**Sample Input 1**
4

**Sample Output 1**
4

**Explanation 1**

T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2

T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4

## Answer
- fibonnacci like, but base: ifn==0 ret 0, if n==1 ret1, if n==2 ret2. recur: return f(n-1)+f(n-2)+f(n-3)
    - tc=^n, sc=n
    - <img src='https://github.com/user-attachments/assets/eedde4c1-e212-419f-9755-b389d7cdfa0a' width='500'/>
- optimised:
    - memoise answer each time and use it and dont calculate
    - tc=n, sc=n
