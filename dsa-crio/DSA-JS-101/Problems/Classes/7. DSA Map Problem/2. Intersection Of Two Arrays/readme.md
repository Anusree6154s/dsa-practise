## Quesition
**Problem Description**
Given two arrays A and B, write a function to compute their intersection.
*Note:*
- Each element in the result should appear as many times as it shows in both arrays.
- The result needs to be in sorted order.

**Input format**
```
First line contains one integer N denoting the number of elements in array A
Next line contains N integers denoting the elements of array A
Next line contains one integer M denoting the number of elements in array B
Next line contains M integers denoting the elements of array B
```

**Output format**
Single line containing the intersection elements of the two arrays in sorted order.

**Sample Input 1**
```
4
1 2 2 1
2
2 2
```

**Sample Output 1**
2 2

**Explanation 1**
Since 2 2 are the only elements present in both the arrays

## Answer
- Use a hash map to count the occurrences of each element in Array A.
- The keys in the map represent elements, and the values represent their frequencies.
- Iterate through Array B.
- For each element in Array B:
    - Check if it exists in the hash map and has a count greater than zero.
    - If true, add the element to the result and decrement its count in the hash map.
- sort result
- tc=nlogn, sc=n