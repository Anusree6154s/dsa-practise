## Question

#### Problem Description

Given a string, count the total number of vowels present in that string.

**Sample Input 1**
language

**Sample Output 1**
4

**Explanation**
There are total 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

**Constraints**
0 < Length of string < 100

## Answer

- for loop, increment count if letter exists in regex /[aeiouAEIOU]/
- tc=n, sc=1

_**gpt suggestion:** another approach uses a Set for quick lookup and may be marginally faster than using regular expressions for longer strings._
