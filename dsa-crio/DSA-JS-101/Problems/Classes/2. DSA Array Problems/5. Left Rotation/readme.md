## Question 
#### Problem Description
You are given a array of numbers. Your task is to rotate the given array left(anti-clockwise) by 1 units from the starting index. You are required to return the rotated array.

**Sample Input 1**
1 2 3 4 5

**Sample Output 1**
2 3 4 5 1

**Explanation**
In the left rotation, the subarray of length 1 from the beginning is [1], this subarray is removed from the beginning and attached to the end of the array(i.e. anti-clockwise).

**Constraints**
1 <= n <= 10^5 1 <= arr[i] <= 10^5
## Answer
- shifting and then pushing
- tc=n, sc=n