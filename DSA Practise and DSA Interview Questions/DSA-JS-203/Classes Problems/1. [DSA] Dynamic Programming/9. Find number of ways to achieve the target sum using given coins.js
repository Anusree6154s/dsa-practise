// Problem Description
// Given an amount A and the denominations of coins available, determine how many ways there are to make change for the amount. Assume that there is a limitless supply of each coin type.

// Input format
// First line contains 2 integers A and N - the amount of money you need to make change for, and the number of coins respectively.

// Second line contains N integers - the denominations of the coins available.

// Output format
// Print the number of ways in which the amount A can be formed using the given coins.

// Note: It is recommended to use 64-bit integers when submitting in C++.

// Sample Input 1
// 4 3

// 1 2 3

// Sample Output 1
// 4

// Explanation
// There are 4 ways to make change for n = 4 using coins {1,2,3}: {1,1,1,1}, {1,1,2}, {2,2}, and {1,3}.

// Constraints
// N <= 50

// A <= 250

// values of coins <= 50

/**
 * @param {number} n
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */


function coinChange(amount, n, coins){
    // Initialize a DP array with size (amount + 1) filled with 0
   const dp = Array(amount + 1).fill(0);

   // Base case: There is exactly one way to make change for amount 0 (using no coins)
   dp[0] = 1;

   // Iterate through each coin denomination
   for (let coin of coins) {
       // Update the DP array for each coin denomination
       for (let i = coin; i <= amount; i++) {
           dp[i] += dp[i - coin];
       }
   }

   // The value at dp[amount] will be the number of ways to make change for the amount
   return dp[amount];
}
