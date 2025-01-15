## Question

#### Problem Description

Given a number n, you have to print a triangle-shaped pattern with n rows using _. The starting row will have one _ and will increment by one for each row after it ( two *s in the second row, three *s in the third row, and so on till the nth row). For eg. if n = 4 pattern will be:

image

**Input format**
First line contains an integer n - Number of rows.

**Output format**
Return an array of strings with each element in the array representing a row of the pattern.

**Sample Input 1**
4

**Sample Output 1**
image

**Explanation**

- In the first row, there is 1 '\*' character.
- In the second row, there are 2 '\*' characters separated by space.
- In the third row, there are 3 '\*' characters separated by space.
- In the fourth row, there are 4 '\*' characters separated by space
- So, the pattern forms a triangle shape where each row has an increasing number of '\*' characters, starting from 1 in the first row and incrementing by 1 in each subsequent row until reaching 4 in the fourth row, which corresponds to the value of n.

**Constraints**
0 < n < 100

## Answer

- each row has double that what it had last time
- tc=n sc=n^2(not sure how,but yea approximately this much)

**eg:**

1
2 3
4 5 6
5 7 8 9 -> all for 4 rows

1
2 3
4 5 6
5 7 8 9
10 11 12 13 14
15 16 17 18 19 20 -> all for 6 rows
