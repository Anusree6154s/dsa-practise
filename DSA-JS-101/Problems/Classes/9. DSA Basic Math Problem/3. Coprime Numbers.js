// Problem Description
// Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

// Input format
// First line contains an integer n - the given number.

// Output format
// Print the total count of coprime numbers.

// Sample Input 1
// 9

// Sample Output 1
// 6

// Explanation
// Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

// Constraints
// 1 <= n <= 1000

// this is also known as  Euler's totient function

//tc=nlog(n), sc=1
function coprimeNumbers(n) {
  // in coprime numbers, their gcd=1

  let count = 0;
  for (let i = 1; i < n; i++) {
    if (gcd(n, i) == 1) {
      count++;
    }
  }

  //calculating gcd
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  return count;
}

let n = 9;
let result = coprimeNumbers(n);
console.log(result);
