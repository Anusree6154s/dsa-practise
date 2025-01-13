## Question
#### Problem Description
Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.

A string is considered a palindrome if it reads the same forwards and backwards.

*Note:*

For the purpose of this problem, we define empty string as valid palindrome.

**Sample Input 1**
madam

**Sample Output 1**
true

**Explanation**
"madam" spelt backwards is "madam", therefore, it is a palindrome.

**Sample Input 2**
crio

**Sample Output 2**
false

**Explanation**
"crio" spelt backwards is "oirc", therefore, it is not a palindrome.

**Constraints**
1 <= s.length <= 2 * 10^5

## Answer
- for loop half way, check if first half equals last half
- tc=n, sc=1

