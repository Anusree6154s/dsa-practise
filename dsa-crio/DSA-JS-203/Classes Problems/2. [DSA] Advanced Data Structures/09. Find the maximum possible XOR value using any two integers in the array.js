// Problem Description
// Given an array of integers, we have to find the maximum possible XOR value using any two integers in the array.

// Input format
// First line will have an integer N denoting the size of the array.

// Next line will have N space separated integers.

// Output format
// Maximum xor value

// Constraints
// 1 < = N <=100000

// |A[i]| <= 2^30 - 1

// Sample Input 1
// 3

// 1 3 9

// Sample Output 1
// 10

// Explanation 1
// Xor between 1 and 3 gives 2

// Xor between 3 and 9 gives 10

// Xor between 1 and 9 gives 8

// We pick the maximum of these, which is 10


/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */

function MaximumXor(n,arr){
    //solve here
     let maxXor = 0;
 
    // Calculating xor of each pair
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            maxXor = Math.max(maxXor,
                         arr[i] ^ arr[j]);
        }
    }
    return maxXor;
}