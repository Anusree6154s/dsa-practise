// Problem Description
// Given an array of non-negative integers, you are initially positioned at the first position of the array. Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last position.

// Input format
// First line contains N, the size of the array

// Second line contains N space separated integers representing the array

// Output format
// If it is possible to reach the last position, print "true", else print "false"

// Constraints
// 1 <= N <= 1000000

// 0 <= a[i] <= N-1

// Sample Input 1
// 4

// 5 1 2 3

// Sample Output 1
// true

// Explanation 1
// Starting from the first position, we can jump a maximum of 5 positions. This means we can reach the last position which only needs 3 jumps. So, true.

// Sample Input 2
// 4

// 1 0 5 4

// Sample Output 2
// false

// Explanation 2
// Starting from the first position, we can only jump one position and we reach the second position which has 0 jumps. We cannot go further from here to reach the last position, so false.

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {String}
 */

function jumpGame(n, nums) {
    // Edge case: If there is only one element and it's 0, we are already at the end
   if (n === 1) return true;
   
   // Initialize maxReach to the first position's jump range
   let maxReach = nums[0];
   
   // Iterate through the array
   for (let i = 1; i < n - 1; i++) {
       if (i <= maxReach) {
           maxReach = Math.max(maxReach, i + nums[i]);
           // Early exit if we can reach the end
           if (maxReach >= n - 1) return true;
       } else {
           // If we cannot reach this position, return false
           return false;
       }
   }
   
   // Check if we can reach the last position
   return maxReach >= n - 1;
}