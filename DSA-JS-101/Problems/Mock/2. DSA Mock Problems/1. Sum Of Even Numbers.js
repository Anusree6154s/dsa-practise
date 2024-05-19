// Problem Description
// You are required to implement a recursive function that calculates the sum of even numbers from 1 to a given positive integer n.

// Input format
// The input consists of a single integer n (1 <= n <= 10^4), representing the upper limit of the range.

// Output format
// Return the sum of even numbers from 1 to n.

// Sample Input 1
// 10

// Sample Output 1
// 30

// Explanation
// The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. The sum is 2+4+6+8+10 = 30.

//tc=n, sc=n
function sumOfEvenNumbersDSAMOCK(n) {
  if (n == 2) {
    return 2;
  }

  if (n % 2 == 0) {
    sum = n + sumOfEvenNumbersDSAMOCK(n - 2);
  } else {
    sum = sumOfEvenNumbersDSAMOCK(n - 1);
  }

  return sum;
}

let n = 10;
let res = sumOfEvenNumbersDSAMOCK(n);
console.log(res);
