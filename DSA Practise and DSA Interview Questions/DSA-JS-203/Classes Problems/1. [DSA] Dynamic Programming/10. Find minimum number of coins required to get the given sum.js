// Problem Description
// Given a list of N coin denominations and a total sum S. Return the minimum number of coins from the given denominations required to form the given sum or report that it's not possible to select coins in such a way that they sum upto S.

// You can assume you have an infinite number of each kind of coin.

// Input format
// An integer array coins representing the denominations of coins you have, and an integer S, representing the amount of money you need to form using the given coins.

// In the sample input, the first line contains two numbers - N and amount, denoting the number of different coins you have and the amount you want to form respectively. The second line contains N integers - the denominations of coins you have.

// Output format
// Return the minimum amount of coins required to form the given amount. In case it is not possible to form the amount, return -1.

// Sample Input 1
// 3 11

// 1 3 5

// Sample Output 1
// 3

// Explanation
// Given the coins with values 1, 3, and 5, you have to form a sum of 11. You can use two 5-valued coins and a 1-valued coin to get the required sum.

// Sample Input 2
// 5 25

// 4 5 2 1 9

// Sample Output 2
// 4

// Explanation
// The optimal selection would be - two 9-valued coins, one coin each of value 5 and 2.

// Constraints
// 1 <= N <= 100

// 1 <= coins[i] <= 1000000

// 1 <= amount <= 1000000

/**
 * @param {number} B
 * @param {number[]} A
 * @return {number}
 */

function minCoins(A, B) {
    // Initialize a DP array where dp[i] will store the minimum number of coins needed to make amount i
    const dp = Array(B + 1).fill(Infinity);

    // Base case: 0 coins are needed to make amount 0
    dp[0] = 0;

    // Iterate through each coin denomination
    for (let coin of A) {
        // Update the DP array for each coin denomination
        for (let amount = coin; amount <= B; amount++) {
            dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
        }
    }

    // If dp[B] is still Infinity, it means it's not possible to form amount B
    return dp[B] === Infinity ? -1 : dp[B];
}