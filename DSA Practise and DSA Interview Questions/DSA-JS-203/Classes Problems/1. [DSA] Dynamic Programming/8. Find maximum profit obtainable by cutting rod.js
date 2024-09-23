// Problem Description
// Given a rod of length N inches and an array of prices, price[] that contains prices of all pieces of size smaller than N. Determine the maximum value obtainable by cutting up the rod and selling the pieces.

// Input format
// N - length of the rod

// then follow n integers corresponding to the prices of ith length piece

// Output format
// return the maximum price at which rod can be sold after cutting it optimally

// Sample Input 1
// 5

// 1 9 3 3 3

// Sample Output 1
// 19

// Explanation
// Rod can be cut up in lengths of 1 + 2 + 2 which corresponds to the price of 1 + 9 + 9 =19

// Constraints
// 1<= N <=1000

// 1<= price[i] <= 1000000

/**
 * @param {number} n
 * @param {number[]} price
 * @return {number}
 */

function rodCutting(n,price) {
    // Initialize a DP array where dp[i] will store the maximum price obtainable for rod of length i
    const dp = Array(n + 1).fill(0);

    // Iterate through each possible length of the rod
    for (let i = 1; i <= n; i++) {
        // Initialize maxVal to store the maximum price obtainable for rod of length i
        let maxVal = -Infinity;

        // Consider all possible cuts from 1 to i and update maxVal
        for (let j = 1; j <= i; j++) {
            maxVal = Math.max(maxVal, price[j - 1] + dp[i - j]);
        }

        // Store the maximum value for rod of length i in dp array
        dp[i] = maxVal;
    }

    // The maximum price obtainable for rod of length n will be stored in dp[n]
    return dp[n];
}