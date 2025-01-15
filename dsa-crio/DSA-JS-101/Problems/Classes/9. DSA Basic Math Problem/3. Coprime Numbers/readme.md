## Question
**Problem Description**
Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

**Input format**
First line contains an integer n - the given number.

**Output format**
Print the total count of coprime numbers.

**Sample Input 1**
9

**Sample Output 1**
6

**Explanation**
Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

**Constraints**
1 <= n <= 1000

## Answer
- A number x is coprime to n if gcd(x,n)=1
- for loop till n, for each number check if co prime(gcd==1). if yes count++
- can be optimised uisng Eulers Totient Function (check it out later)