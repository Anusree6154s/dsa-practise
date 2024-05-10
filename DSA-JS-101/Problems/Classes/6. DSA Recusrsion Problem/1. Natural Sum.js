// Problem Description
// You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

function naturalSum(N) {
    if (N === 0) {
        return 0
    }
    let sum = N + naturalSum(N - 1)
    return sum
}
let N = 10;
let res = naturalSum(N);
console.log(res);