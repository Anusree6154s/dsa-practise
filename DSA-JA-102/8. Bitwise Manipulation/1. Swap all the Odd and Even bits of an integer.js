// Problem Description
// Given an unsigned integer N, swap all odd bits with even bits. Every even position bit is swapped with the adjacent bit on the right side and every odd position bit is swapped with adjacent on the left side. Assume a 32 bit integer.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// N which represents an unsigned integer.

// Output format
// Single output integer after the algorithm has successfully swapped bits of the input.

// Constraints
// 0 <= N <= 2147483647

// Sample Input 1
// 22

// Sample Output 1
// 41

// Explanation 1
// The given number is 22 (00010110), it should be converted to 41 (00101001).

function swapAllOddAndEvenBits(n) {
    let ans = 0n
    for (let i = 0; i < 32; i++) {
        if (checkBit(n, i)) {
            if (i % 2 !== 0) {
                ans = setBit(ans, i - 1)
            } else {
                ans = setBit(ans, i + 1)
            }
        }
    }

    return Number(ans)
}

function checkBit(n, bit) {
    let mask = 1n << BigInt(bit)
    let res = BigInt(n) & mask
    if (res !== 0n) {
        return true
    }
    return false
}

function setBit(n, bit) {
    let mask = 1n << BigInt(bit)
    return n | mask
}

let answer = swapAllOddAndEvenBits(22);
console.log(answer);