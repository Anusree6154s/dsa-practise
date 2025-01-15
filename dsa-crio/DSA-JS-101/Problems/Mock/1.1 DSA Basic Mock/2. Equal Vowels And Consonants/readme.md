## Question
**Problem Description**
Given a string, write a program to check if it consists of equal number of vowels and consonants.

**Input format**
First line contains an string str consisting of lowercase english alphabets.

**Output format**
Return true if the string contains equal number of vowels and consonants else return false.

**Sample Input 1**
ab

**Sample Output 1**
true

**Explanation**
string "ab" contains one vowel (a) and one consonant (b).

**Constraints**
1 <= str.length <= 10^5

## Answer
- keep 2 counters. increment one for vowels, other for consonants. return if they are equal or not.
- tc=n, sc=1