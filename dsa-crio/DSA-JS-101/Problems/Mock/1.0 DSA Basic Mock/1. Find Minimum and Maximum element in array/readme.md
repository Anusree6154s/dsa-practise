### Question

**Problem Description**
Given an array of integers, write a program to find the sum of the minimum and maximum values of the array.

**Input format**

```
First line contains an integer N, the size of the array

Second line contains the integers present in the array
```

**Output format**
Return expected integer

**Sample Input 1**

```
5
10 15 4 5 19
```

**Sample Output 1**
23

**Explanation**
The minimum and maximum values of the array are 4 and 19 respectively, totaling 23

## Answer

- sort. sum first and last elemet. return ans
  - tc=nlogn, sc=1
- optimised: simgle for loop, record min and max on the way
  - tc=n, sc=1
