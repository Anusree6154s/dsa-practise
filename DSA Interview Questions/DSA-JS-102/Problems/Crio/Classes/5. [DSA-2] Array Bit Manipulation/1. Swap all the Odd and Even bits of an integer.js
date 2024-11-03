// /Problem Description
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

//tc = 1, sc=1
function swapAllOddAndEvenBits(n) {
    //all numbers are 32 bit in binary digits
    //swap all odd bits to right, even bits to left
    console.log(n)
    let ans = 0n
    for (let bit = 0; bit < 32; bit++) {
        if (isSet(bit, n)) {
            if (bit % 2 !== 0) {
                // if odd. set right
                ans = setBit(ans, bit - 1)
            } else {
                //if even, set left
                ans = setBit(ans, bit + 1)
            }
        }
    }


    function isSet(bitPosition, n) {
        let mask = 1n << BigInt(bitPosition)
        let isSet = BigInt(n) & mask
        return isSet > 0n
    }

    function setBit(ans, bitPosition) {
        let mask = 1n << BigInt(bitPosition)
        ans = ans | mask
        return ans
    }

    return Number(ans)
}



let n = 22
let answer = swapAllOddAndEvenBits(n);
console.log(answer);