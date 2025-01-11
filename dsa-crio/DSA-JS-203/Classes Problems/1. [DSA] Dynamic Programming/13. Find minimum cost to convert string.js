// Problem Description
// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character

// Delete a character

// Replace a character

// Input format
// First line will have word1.

// Second line will have word2.

// Output format
// Minimum number of operations required to convert word1 to word2.

// Constraints
// 1 <= |word1| <= 1000

// 1 <= |word2| <= 1000

// Sample Input 1
// horse

// ros

// Sample Output 1
// 3

// Explanation 1
// horse -> rorse (replace 'h' with 'r')

// rorse -> rose (remove 'r')

// rose -> ros (remove 'e')

/**
 * @param {String} str1
 * @param {String} str2
 * @return {number}
 */

function editDistance(str1, str2) {
    const m = str1.length;
   const n = str2.length;
   
   // Initialize dp table with dimensions (m+1) x (n+1)
   const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
   
   // Base cases
   for (let i = 0; i <= m; i++) {
       dp[i][0] = i; // Minimum operations to convert str1[0...i-1] to empty str2
   }
   for (let j = 0; j <= n; j++) {
       dp[0][j] = j; // Minimum operations to convert empty str1 to str2[0...j-1]
   }
   
   // Fill dp table
   for (let i = 1; i <= m; i++) {
       for (let j = 1; j <= n; j++) {
           if (str1[i - 1] === str2[j - 1]) {
               dp[i][j] = dp[i - 1][j - 1]; // Characters are same, no operation needed
           } else {
               dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
               // 1 + min of (delete, insert, replace)
           }
       }
   }
   
   return dp[m][n];
}