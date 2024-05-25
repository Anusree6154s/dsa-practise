// Problem Description
// Given two numbers, write a program to count the number of bits that need to be flipped to convert the first number to the second number.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// A single line that contains two space separated integers A and B.

// Output format
// A single line that contains an integer which represents the number of bits needed to flip to convert integer A to integer B

// Constraints
// 0 <= A, B <= 10^18

// Sample Input 1
// 29 15

// Sample Output 1
// 2

// Explanation 1
// Binary of 29 is 11101 and Binary of 15 is 01111. So, 2 bits need to be flipped.

//tc=n, sc=1
function countConversionBits(a, b) {
    //when we xor two numbers, the set bits in the resuting number is the result of the bits that are not equal in parent two numbers
    //if in parent numbers, 2 bits dont match, then in result it will be a set bit
    //1^0 =1


    let result = a ^ b

    let count = 0
    while (result != 0) {
        result = result & result - 1
        count++
    }


    return count

}

let [a, b] = [29, 15]
let answer = countConversionBits(a, b);
console.log(answer);