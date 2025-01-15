**Problem Description**
Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].
It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

**Input format**
The first line contains an integer N, the number of words in the array.

The next N lines contain the words in the array.

**Output format**
Return the most occurring word in the array.

**Sample Input 1**

```
4
hello
world
crio
crio
```

**Sample Output 1**
crio

**Explanation**
In this case, "crio" is the most frequent word, occurring 2 time.

## Answer

- maintain a map with word and its freq. also maintain the max freq so far
- then loop in mpa to get teh words with that freq. return those words in arr sorted using arr.sort()

- tc=nlogn, sc=n
