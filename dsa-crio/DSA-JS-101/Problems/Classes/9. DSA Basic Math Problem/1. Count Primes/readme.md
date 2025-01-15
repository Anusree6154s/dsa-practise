## Question

**Problem Description**
Count the number of prime numbers less than a non-negative number, n.

**Input format**
Single line containing one integer N

**Output format**
Single line containing one number denoting the number of prime numbers less than N

**Sample Input 1**
10

**Sample Output 1**
4

**Explanation**
There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

**Constraints**
1<=N=100000

## Answer

- using eratosthenes sieve
- keep freq array iPrime with all index set to true, except for 0 or 1
- loop from 2 to √n, and in it loop from i to i². if (i dont remeebr rest)
- Iterate from 2 to √n
  - If isPrime[i] is true, mark all multiples of i, from i^2 to n as false
  - tc=nloglogn, sc=n
