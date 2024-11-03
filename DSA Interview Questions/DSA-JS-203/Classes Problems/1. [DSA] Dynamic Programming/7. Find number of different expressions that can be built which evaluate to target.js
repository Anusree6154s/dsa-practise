// Problem Description
// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

// Return the number of different expressions that you can build, which evaluates to target.

// Input format
// First line of input contains 2 integers, n and target denoting the number of elements in the integer array and the target to be achieved.

// The next n lines contain the n elements of the integer array.

// Output format
// Return the number of different expressions that you can build, which evaluates to target.

// Sample Input 1
// 5 3

// 1

// 1

// 1

// 1

// 1

// Sample Output 1
// 5

// Explanation
// There are 5 ways to assign symbols to make the sum of nums be target 3

// -1 + 1 + 1 + 1 + 1 = 3

// +1 - 1 + 1 + 1 + 1 = 3

// +1 + 1 - 1 + 1 + 1 = 3

// +1 + 1 + 1 - 1 + 1 = 3

// +1 + 1 + 1 + 1 - 1 = 3

// Constraints
// 1 <= nums.length <= 20

// 0 <= nums[i] <= 1000

// 0 <= sum(nums[i]) <= 1000

// -1000 <= target <= 1000



function targetSum(A,B) {
    const n = A.length;
   const sum = A.reduce((acc, num) => acc + num, 0);

   // If the target is out of the range of possible sums, return 0
   if (B > sum || B < -sum) {
       return 0;
   }

   // Initialize the DP array with dimensions (2 * sum + 1), filled with 0
   let dp = Array(2 * sum + 1).fill(0);
   dp[sum] = 1; // Initialize the DP array with sum shifted by 'sum' to handle negative indices

   for (let num of A) {
       const next = Array(2 * sum + 1).fill(0);
       for (let i = 0; i < dp.length; i++) {
           if (dp[i] !== 0) {
               next[i + num] += dp[i];
               next[i - num] += dp[i];
           }
       }
       dp = next;
   }

   return dp[sum + B];
}