// Problem Description
// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Input format
// First line contains an integer n which denotes the size of the input array.

// The next n lines contain n integers denoting the elements of the array.

// Output format
// If the array can be partitioned into two subsets such that the sum of elements in both subsets is equal, return true else return false.

// Sample Input 1
// 4

// 1 5 11 5

// Sample Output 1
// 1

// Explanation
// The array can be partitioned as [1, 5, 5] and [11].

// Constraints
// 1 <= nums.length <= 200

// 1 <= nums[i] <= 100

function EqualSumPartition(A) {
    const n = A.length;
      const totalSum = A.reduce((acc, num) => acc + num, 0);
  
      // If total sum is odd, it's not possible to partition into two equal subsets
      if (totalSum % 2 !== 0) {
          return 0;
      }
  
      const targetSum = totalSum / 2;
  
      // Initialize a DP array with (targetSum + 1) dimensions, filled with false
      const dp = Array(targetSum + 1).fill(false);
      dp[0] = true; // A sum of 0 is always possible with an empty subset
  
      // Fill the DP table
      for (const num of A) {
          for (let j = targetSum; j >= num; j--) {
              dp[j] = dp[j] || dp[j - num];
          }
      }
  
      // The value at dp[targetSum] will be true if there is a subset with sum targetSum
      return dp[targetSum] ? 1 : 0;
  }