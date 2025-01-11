// Problem Description
// Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// Single line containing one 32-bit unsigned integer N.

// Output format
// Single line containing number of 1 bits in N.

// Sample Input 1
// 5

// Sample Output 1
// 2

// Explanation 1
// Binary representation of 5 is:

// 101

// Hence total number of 1 bits = 2

// Constraints
// 0<=N<=2^32-1


// tc = n, sc = 1
function numberOfOneBits(n) {
    //using Brian Kernighan's algorithm
    // which means when we 'and' a number with number-1, we turn off one set bit

    let count = 0
    while (n != 0) {
        n = n & n - 1
        count++
    }

    return count
}

let n = 5
let answer = numberOfOneBits(n);
console.log(answer);