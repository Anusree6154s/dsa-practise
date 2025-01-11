// Problem Description
// You have been given two strings 's1' and 's2'. You have to find the length of the longest common substring.

// A string "str1" is a substring of another string “str2” if “str2” contains the same characters as in “str1”, in the same order and in continuous fashion also.

// Input format
// First line of input contains T which denotes the number of test cases.

// The first line of input of every test case contains the 2 strings for which you need to find the length of the longest common substring.

// Output format
// Print the length of the longest common substring of the given two strings for each test case in a separate line.

// Sample Input 1
// 2

// abcjklp acjkp

// wasdijkl wsdjkl

// Sample Output 1
// 3

// 3

// Explanation
// In test case 1, the longest common substring is "cjk" of length 3. In test case 2, the longest common substring is "jkl" of length 3.

// Constraints
// 1 <= T <= 1000

// 1 <= |s1|, |s2| <= 1000

// T*|s1|*|s2| <= 10^6

// Where |s1| and |s2| are the lengths of the string 's1' and 's2' respectively.

// Time limit: 1 sec

/**
 * @param {String} A
 * @param {String} B
 * @return {number}
 */

function longestCommonSubstring(A,B) {
    const m = A.length;
    const n = B.length;

    // Initialize a 2D DP array where dp[i][j] will store the length of longest common substring ending at A[i-1] and B[j-1]
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Variable to store the length of the longest common substring found
    let maxLength = 0;

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            } else {
                dp[i][j] = 0; // Reset to 0 if characters don't match
            }
        }
    }

    return maxLength;
}