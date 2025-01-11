// Problem Description
// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1

// 'B' -> 2

// 'Z' -> 26

// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Since the answer can be very large, print the answer modulo 1000000007.

// Input format
// Single line with the string

// Output format
// Number of ways to decode modulo 1000000007

// Constraints
// 1 <= String length <= 5000

// Sample Input 1
// 15

// Sample Output 1
// 2

// Explanation 1
// We can decode the string in these 2 ways - AE (since A is 1 and E is 5) or O (since O is 15).

// Sample Input 2
// 157

// Sample Output 2
// 2

// Explanation 2
// We can only decode the string in 2 ways - AEG (since A is 1, E is 5 and G is 7) or OG (since O is 15 and G is 7)

// We cannot split it into 1 and 57 since no letter represents 57

// We cannot decode with 157 as a whole since no letter represents 157

/**
 * @param {String} s
 * @return {number}
 */


function decodeWays(s){
    const MOD = 1000000007;
   const n = s.length;
   
   // Initialize dp array
   const dp = Array(n + 1).fill(0);
   dp[0] = 1; // Base case: one way to decode an empty string
   
   for (let i = 1; i <= n; i++) {
       // Single digit check
       if (s[i - 1] !== '0') {
           dp[i] = dp[i - 1];
       }
       
       // Two-digit check
       if (i > 1) {
           const twoDigit = parseInt(s.substring(i - 2, i));
           if (twoDigit >= 10 && twoDigit <= 26) {
               dp[i] = (dp[i] + dp[i - 2]) % MOD;
           }
       }
   }
   
   return dp[n];
}