## Question 
**Problem Description**
You are given a string str consisting of non-repeating lowercase English letters.
Additionally, you have an array arr of strings, each containing non-repeating characters.
Your task is to create a program that identifies and returns the strings from the arr that are anagrams of the given string str.
The resulting array of strings should be in lexicographically sorted order.

**Input format**
The first line contains a string str (1 <= |str| <= 26), representing a sequence of non-repeating lowercase English letters.
The second line contains an integer N (1 <= N <= 10^5), representing the number of strings in the arr.
The next N lines each contain a string of non-repeating characters, representing the elements of the arr.

**Output format**
Return a array of strings containing only those strings from the input array that are anagrams of the given string str.
Resultant array of string should be in sorted order.

**Sample Input 1**

```
abc
3
cab
bac
xyz
```

**Sample Output 1**

```
bac
cab
```

**Explanation**
Strings "cab" and "bac" are anagrams of the given string "abc".
## Answer
- store the first string letters as set
- for each string in next arr, check if set has all its letters. if yes push in ans arr. return ans arr
- tc=(n*m)+nlogn ≃ nlogn(m=length of strings in arr), sc=1 (max 26 letters)