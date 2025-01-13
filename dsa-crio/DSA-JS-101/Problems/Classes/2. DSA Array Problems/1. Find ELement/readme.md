## Question
#### Problem Description
Given an array of n elements and an integer x, find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.

**Sample Input 1**
`5`

**1 3 4 2 1**

`1`

**Sample Output 1**
`0`

**Explanation 1**
1 is present at 0 and 4 indexes and the leftmost index is 0.
## Answer
- Iterative (bcz array not sorted)
    - for loop the arr and return the first time the first index where target is found
    - tc=n, sc=1
- Binary Search (had it been sorted, but not in this case)