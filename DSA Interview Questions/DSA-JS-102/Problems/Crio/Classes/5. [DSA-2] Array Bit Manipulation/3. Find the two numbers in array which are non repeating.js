// Problem Description
// Given an array in which all numbers except two are repeated once. (i.e. we have 2k+2 numbers and k numbers are occurring twice and remaining two have occurred once).

// Find those two numbers in the most efficient way. Return the two numbers in a sorted manner.

// Input format
// First line of input contains N which denotes the number of elements in the input array.

// The next line of input contains N space separated integers.

// Output format
// Return the two numbers which are present only once in the array in a sorted manner(i.e smaller number first).

// Sample Input 1
// 8

// 2 3 7 9 11 2 3 11

// Sample Output 1
// 7 9

// Explanation
// All numbers except 7 and 9 are repeated once.

// Constraints
// 2<=N<=100000

// 1<=arr[i]<=100000

// tc=n, sc=1 
function twoNonRepeatingNumbers(N, nums) {
    let xor = 0;

    // Step 1: XOR all elements to get the XOR of the two unique numbers
    for (let i = 0; i < N; i++) {
        xor ^= nums[i];
    }

    // Step 2: Find the first bit (rightmost set bit in this case) - msb (most significant bit)
    let setBit = xor & -xor;

    let num1 = 0;
    let num2 = 0;

    // Step 3: Divide numbers into two groups and XOR them separately
    for (let i = 0; i < N; i++) {

        if (nums[i] & setBit) {// we are checking if there are elements who has their bit set at the position of msb
            num1 ^= nums[i]; //xor of these elements will give us the first num whoch has its bit set tat the position of msb
        } else {
            num2 ^= nums[i]; //xor of other elements will result in the the other num
        }
    }

    // num1 and num2 are the two non-repeating numbers
    return [num1, num2];
}

const [N] = [8]
const nums = [2, 3, 7, 9, 11, 2, 3, 11]
const result = twoNonRepeatingNumbers(N, nums);
for (let i = 0; i < 2; i++)
    console.log(`${result[i]} `);

