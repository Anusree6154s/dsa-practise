**Problem Description**
Given an integer n, you have to find the nth fibonacci number. The fibonacci sequence is given by 0,1,1,2,3,5,8,... where 0 and 1 are the 0th and 1st fibonacci numbers respectively and every consecutive number is the sum of the previous two numbers in the sequence.

**Input format**
There is one line of input, containing an integer n.

**Output format**
Print the nth fibonacci number.

**Sample Input 1**
3

**Sample Output 1**
2

**Explanation 1**
3rd fibonacci number is equal to the sum of 1st and 2nd fibonacci numbers i.e. 1 + 1 = 2.
## Answer
- fibonnacci:
    - base: if n=1 return 1, if n=0 return 0
    - recur: return func(n-1)+func(n-2)
    - tc=2^n, sc=n
    - <img src='https://github.com/user-attachments/assets/8461bff5-9081-4e82-bd1e-53f976112641' width='600'/>
    - in reality tc is smaller than 2^n but closer to it. (cuz of being cut off by base cases)
- optimised:
    - memoise answer each time and use it and dont calculate
    - tc=n, sc=n
