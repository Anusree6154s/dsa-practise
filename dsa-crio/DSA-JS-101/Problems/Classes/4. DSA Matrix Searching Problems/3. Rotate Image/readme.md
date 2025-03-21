## Question

#### Problem Description

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
_Note:_
_You have to rotate the image in-place, which means you have to modify the input 2D matrix directly._
_DO NOT allocate another 2D matrix and do the rotation._

**Input format**
There are N+1 lines of input.
First line contains one integer N.
Next N line contains N space separated integers

**Output format**
Print the NxN rotated matrix.

**Sample Input 1**

```
3
1 2 3
4 5 6
7 8 9
```

**Sample Output 1**

```
7 4 1
8 5 2
9 6 3
```

**Sample Input 2**

```
4
5 1 9 11
2 4 8 10
13 3 6 7
15 14 12 16
```

**Sample Output 2**

```
15 13 2 5
14 3 4 1
12 6 8 9
16 7 10 11
```

**Constraints**
1 <= n <= 100

## Answer

- inplace rotation -> exchanging the places of elements
- 90deg rotation = horizontal flip+digonal flip
- tc=n^2, sc=1

<img src='https://github.com/user-attachments/assets/fe41400b-85d4-49d1-95e6-f8ab477357e8' width=500 />
