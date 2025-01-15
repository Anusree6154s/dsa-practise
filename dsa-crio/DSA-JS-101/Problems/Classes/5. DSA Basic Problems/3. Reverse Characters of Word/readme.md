## Question

**Problem Description**

Write a program to reverse the words present in a sentence.

**Input format**
First line contains an string consisting of words separated by spaces.

**Output format**
Return the string with it's words reversed.

**Sample Input 1**
abc def ghi

**Sample Output 1**
cba fed ihg

**Explanation**
abc reversed is cba, def reversed is fed, ghi reversed is igh.

**Constraints**
1 <= str.length <= 10^5

## Answer

- 2 pointers
- 1 pinter for loop till first space after a letter. then comback till 2nd pointer storng the letters in a string. when index same for both pointer, add space in ans string
- move 2nd pointer and 1st pointer till 1st letter after a space. repeat step 1

- tc=n, sc=n
