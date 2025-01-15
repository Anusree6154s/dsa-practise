## Question

#### Problem Description

Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.
Magic square is a square that has the same sum of rows, columns and diagonals.

**Sample Input 1**

```
3
4 9 2
3 5 7
8 1 6
```

**Sample Output 1**
Yes

**Explanation**
All rows, columns and diagonals have sum 15.

**Constraints**

- 1 <= n <= 100
- 1 <= element of matrix <= n\*n

## Answer

- chceck magic square matrix: check if sum of rows==sum of cols== sum of main diagonals
- find sum of one row to get base,
- then for each row, col and diagonal and compare
- if not match flse, else true
- tc=n^2, sc=1
