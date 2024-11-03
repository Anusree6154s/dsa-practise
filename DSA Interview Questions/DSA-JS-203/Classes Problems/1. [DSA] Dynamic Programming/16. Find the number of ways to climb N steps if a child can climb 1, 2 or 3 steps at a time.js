// Problem Description
// A child is running up a staircase with N steps. The child can hop either 1 step, 2 steps or 3 steps at a time. Can you write a program to count the number of possible ways in which the child can run up the staircase.

// Input format
// Single line with N, number of steps

// Output format
// Number of different ways to climb, mod 1000000007

// Constraints
// 1 <= N <= 100000

// Sample Input 1
// 3

// Sample Output 1
// 4

// Explanation 1
// These are the possible ways in which the child can climb up the 3 step staircase:

// One single hop of 3 steps (3)

// Two step hop followed by a one step hop (2 + 1)

// One step hop followed by a two step hop (1 + 2)

// Three one step hops (1 + 1 + 1)

/**
 * @param {number} n
 * @return {number}
 */

function numberOfWays(n){
    const MOD = 1000000007;
   
   // Initialize dp array
   const dp = Array(n + 1).fill(0);
   
   // Base cases
   dp[0] = 1; // One way to be on the ground (not taking any steps)
   if (n >= 1) dp[1] = 1; // One way to reach the first step (hop 1 step)
   if (n >= 2) dp[2] = 2; // Two ways to reach the second step (1+1 or 2)
   
   // Fill dp array for steps >= 3
   for (let i = 3; i <= n; i++) {
       dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
   }
   
   return dp[n];
}