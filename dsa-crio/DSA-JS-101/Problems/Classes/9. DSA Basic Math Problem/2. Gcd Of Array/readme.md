## Question
**Problem Description**
Given an array of numbers, find GCD of the array elements.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

**Input format**

```
First line contains n, the number integers.

Second line contains n space separated integers.
```

**Output format**
Return the gcd of array.

**Sample Input 1**

```
4

4 6 8 16
```

**Sample Output 1**
2

**Explanation**
gcd(4,6,8,16) = 2, as 2 is the greatest number that divides all four numbers

**Constraints**
2 <= n <= 10^3

1 <= nums[i] <= 10^3

## Answer
- finding gcd 
- for [a, b, c, d,..] 
    - gcd of all = gcd(1, 2, 3..etc)
    - where gcs1= gcd(a,b)
    - where gcs2= gcd(1,c)
    - where gcs3= gcd(2,d)..
- gcd(a,b)=gcd(b, a%b) until b==0. then gcd(a, 0)=a
- tc=log(min(a,b)), sc=1