// Problem Description
// Given a string S, find the length of longest subsequence which is repeated in the string. The two identical subsequences cannot have a character at the same position in the original string.

// Input format
// You will be given a string S

// Output format
// Print the length of the longest repeated subsequence

// Sample Input 1
// crivcrioo

// Sample Output 1
// 4

// Explanation
// The subsequence "crio" is the longest repeated subsequence in the given string.

// Constraints
// 1<= length of S <=2000

/**
 * @param {String} s
 * @return {number}
 */
function longestRepeatedSubsequence(str) {
    // const n = str.length;
    // // Initialize a 2D array dp
    // const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // // Build the dp table
    // let maxLength = 0;
    // for (let i = 1; i < n; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (str[i] === str[j]) {
    //             dp[i][j] = 1; // At least 1 length for repeated subsequence
    //             for (let k = 0; k < j; k++) {
    //                 for (let m = 0; m < i; m++) {
    //                     if (str[k] === str[m] && k !== m) {
    //                         dp[i][j] = Math.max(dp[i][j], dp[k][m] + 1);
    //                     }
    //                 }
    //             }
    //             maxLength = Math.max(maxLength, dp[i][j]);
    //         }
    //     }
    // }

    // return maxLength;

    var n = str.length;
      
        // Create and initialize DP table
        var dp = new Array(n + 1);
         
        for (var i=0; i<=n; i++)
        {
            dp[i] = new Array(n + 1);
            for (var j=0; j<=n; j++)
            {
                dp[i][j] = 0;
            }
        }
             
        // Fill dp table (similar to LCS loops)
        for (var i=1; i<=n; i++)
        {
            for (var j=1; j<=n; j++)
            {
                // If characters match and indexes are 
                // not same
                if ((str[i-1] == str[j-1]) && (i != j))
                    dp[i][j] =  1 + dp[i-1][j-1];          
                           
                // If characters do not match
                else
                    dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
        return dp[n][n];
}