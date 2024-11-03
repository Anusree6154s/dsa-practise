// Problem Description
// Given a list of integers, find the length of the longest increasing subsequence.

// Input format
// First line contains an integer N - Number of integers in the list.

// Second line contains N integers.

// Output format
// Print the length of longest increasing subsequence.

// Sample Input 1
// 7

// 5 4 1 6 2 2 3

// Sample Output 1
// 3

// Explanation 1
// The subsequence {1,2,3} of length 3 is the longest increasing subsequence.

// Constraints
// 0 <= N <= 10^3

// 0 <= Range of integers <= 10^9

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */

function longestIncreasingSubsequence(n, arr) {
    if (n === 0) return 0; // Edge case: empty array
  
  // Initialize dp array with 1s, as each element is at least a subsequence of length 1 itself
  const dp = Array(n).fill(1);
  
  // Iterate through each element in the array
  for (let i = 1; i < n; i++) {
      // Check all previous elements for possible LIS
      for (let j = 0; j < i; j++) {
          if (arr[j] < arr[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }
  
  // Find the maximum value in dp array, which is the length of the longest increasing subsequence
  let maxLength = 0;
  for (let length of dp) {
      maxLength = Math.max(maxLength, length);
  }
  
  return maxLength;
}