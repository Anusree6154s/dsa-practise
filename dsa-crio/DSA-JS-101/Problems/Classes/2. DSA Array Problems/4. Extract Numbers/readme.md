## Qusetion 
#### Problem Description

Given an array containing a mix of strings and numbers, such as [a, 1, b, 2, c, d, 3, 4, e], your task is to create a new array that retains only the numbers present in the original array.

For example, from the provided array, the output array should contain [1, 2, 3, 4]. The numbers in the original array can be single or multiple digits, and there may be strings interspersed among them.

Note: The numbers in the array are also of string type.

**Sample Input 1**

```
8
a 3 long 17 crio dsa 100 20
```

**Sample Output 1**
`3 17 100 20`

**Explanation**
The input array contains four integers [3, 17, 100, 20]

**Constraints**

1 <= N <= 10^5

1 <= |arr[i]| <= 8 where |arr[i]| is the length of the string

## Answer
- for loop. extract only those elemnts of typeof number
- tc=n, sc=n