## Question
#### Problem Description
Write a program that outputs the string representation of numbers from 1 to N.

But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

**Sample Input 1**
15

**Sample Output 1**
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz

11

Fizz

13

14

FizzBuzz
```

**Explanation 1**
- For n = 1 , 1 is printed.
- For n = 3 , Fizz is printed.
- For n = 5 , Buzz is printed.
- For n = 15 , FizzBuzz is printed.

## Answer
- for loop with deivisibilty check for muliples of 3 and 5
- tc=n , sc=1