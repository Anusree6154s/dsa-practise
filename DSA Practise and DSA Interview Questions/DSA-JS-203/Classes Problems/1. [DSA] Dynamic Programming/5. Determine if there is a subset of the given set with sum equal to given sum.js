// Problem Description
// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.

// Input format
// N- length of array

// T- Target number

// A- a set of size n

// Output format
// If it is possible to add a subset of numbers to make T return 1 else return 0.

// Sample Input 1
// 5 5

// 1 2 4 8 9

// Sample Output 1
// 1

// Explanation
// In the given array

// 1 + 4 = 5

// Constraints
// 1<=N<=100

// 0<=T<=10^5

// 0<=A[i]<=10^5 for all i


function subsetSum(A,B) {
    const N = A.length;
   // Initialize a DP array with (N+1) x (B+1) dimensions, filled with false
   const dp = Array.from({ length: N + 1 }, () => Array(B + 1).fill(false));

   // A sum of 0 is always possible with an empty subset
   for (let i = 0; i <= N; i++) {
       dp[i][0] = true;
   }

   // Fill the DP table
   for (let i = 1; i <= N; i++) {
       for (let j = 1; j <= B; j++) {
           if (A[i - 1] <= j) {
               dp[i][j] = dp[i - 1][j] || dp[i - 1][j - A[i - 1]];
           } else {
               dp[i][j] = dp[i - 1][j];
           }
       }
   }

   // The value at dp[N][B] will be true if there is a subset with sum B
   return dp[N][B] ? 1 : 0;
}