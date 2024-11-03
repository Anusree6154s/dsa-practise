// Problem Description
// Reverse the bits of a given 32 bits unsigned integer.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// First line contains the number of test cases.

// Each line contains a 32 bit unsigned integer.

// Output format
// Output the Reversed unsigned integer.

// Sample Input 1
// 1

// 43261596

// Sample Output 1
// 964176192

// Explanation 1
// The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 whose binary representation is 00111001011110000010100101000000

// Constraints
// 1 <= T <= 10^5

// 0 <= N <= 2^32-1


//tc =1, sc=1
function reverseBits(n) {
    let ans = 0n
    for (let bit = 0; bit < 32; bit++) {
        if (bitIsSet(n, bit)) {
            ans = setBit(ans, 31 - bit)
        }
    }

    function bitIsSet(n, bitPosition) {
        let mask = 1n << BigInt(bitPosition)
        return BigInt(n) & mask
    }

    function setBit(ans, bitPosition) {
        let mask = 1n << BigInt(bitPosition)
        ans = ans | mask
        return ans
    }

    return Number(ans)
}

let n = 43261596
let answer = reverseBits(n);
console.log(answer);