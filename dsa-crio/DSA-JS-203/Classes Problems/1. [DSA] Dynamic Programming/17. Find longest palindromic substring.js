// Problem Description
// Given a string, find the length of its Longest Palindromic Substring.

// In a palindromic string, elements read the same backward and forward.

// Input format
// First line contains T, the number of test cases.

// First line of each test case contains integer N, the length of the String.

// Second line of each test case contains the string S.

// Output format
// Print the length of the longest palindromic substring for each test case on a separate line.

// Constraints
// T <= 20

// N <= 500

// Sum of N over all test cases does not exceed 1000.

// Sample Input 1
// 2

// 6

// abcpca

// 3

// abc

// Sample Output 1
// 3

// 1

// Explanation 1
// In the 1st test case, the string 'cpc' is palindromic with length 3.

// In the 2nd test case, 'a' can be considered as a palindrome with length 1.

/**
 * @param {number} n
 * @param {String} s
 * @return {number}
 */


function longestPalindromicSubstringLength(n, s) {
    const len = s.length;
    
    // Edge case: Empty string
    if (len === 0) return 0;
    
    // Initialize a 2D DP array
    const dp = Array(len).fill().map(() => Array(len).fill(false));
    
    // Initialize single character substrings as palindromes
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    
    let maxLength = 1; // Minimum length of palindromic substring is 1
    let start = 0; // Starting index of the longest palindromic substring
    
    // Check for substrings of length 2
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLength = 2;
            start = i;
        }
    }
    
    // Check for substrings of length > 2
    for (let length = 3; length <= len; length++) {
        for (let i = 0; i <= len - length; i++) {
            let j = i + length - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (length > maxLength) {
                    maxLength = length;
                    start = i;
                }
            }
        }
    }
    
    return maxLength;
}