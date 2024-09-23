// Problem Description
// You are climbing a staircase. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Input format
// A single Integer N, that contains the number of steps in the stair.

// Output format
// Print the number of distinct ways you can climb to the top.

// Sample Input 1
// 2

// Sample Output 1
// 2

// Explanation 1
// There are two ways to climb to the top.

// 1 step + 1 step

// 2 steps

// Constraints
// 1 <= N <= 10^5

function climbingStairs(numberOfStairs, map = {}) {
    //the number of ways for each step is similar to fibonacci sequence
    //fibonacci sequence fr higher numbers are difficult using recursion
    //so we use dynamic programming

    if (map[numberOfStairs]) return map[numberOfStairs]

    if (numberOfStairs == 1) return 1
    if (numberOfStairs == 2) return 2

    map[numberOfStairs] = climbingStairs(numberOfStairs - 1) + climbingStairs(numberOfStairs - 2)

    return map[numberOfStairs]
}

console.log(climbingStairs(13))//expected 377
console.log(climbingStairs(8))//expected 34