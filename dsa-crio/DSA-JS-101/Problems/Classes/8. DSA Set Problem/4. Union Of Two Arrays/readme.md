## Question

**Problem Description**
You are given two arrays A and B of size n and m respectively. You need to find the resultant array of the union between these two arrays.
Elements are not necessarily distinct.
_Note:-Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union._
Resultant Array should be in sorted order

**Input format**

```
Line 1: Two integers n and m denoting the size of the array A and B.
Line 2: An array of integers A separated by space.
Line 3: An array of integers B separated by space.
```

**Output format**
Return resultant list denoting the the union between these two arrays in sorted order.

**Sample Input 1**

```
5 3
1 2 3 4 5
1 2 3
```

**Sample Output 1**
1 2 3 4 5

**Explanation**
1, 2, 3, 4 and 5 are the elements which comes in the union set of both arrays.

## Answer

- store both arrays into set. return set
- tc=(n+m)log(n+m), sc=n+m
