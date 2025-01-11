// Problem Description
// Three friends went on to play a team game. The game has n boxes and inside each box there are some coins. They have to choose some boxes and they will get the amount of coins present in that box. The only constraint the game has is that no two adjacent boxes can be chosen. The friends want to maximise the number of coins they win. Print the maximum number of coins they can get.

// Input format
// First line contains a single integer n representing the number of boxes available.

// Second line contains n space seperated integers representing the number of coins in the ith box.

// Output format
// Print a single integer representing the maximum number of coins they can get following the game constraint.

// Sample Input 1
// 4

// 1 2 3 1

// Sample Output 1
// 4

// Explanation
// To get the maximum the friends have to choose the first and the third box.

// Sample Input 2
// 5

// 2 7 9 3 1

// Sample Output 2
// 12

// Explanation
// To get the maximum the friends have to choose the first(containing 2 coins), third(containing 9 coins) and the fifth(containing 1 coin) .

// Constraints
// 2 <= N <= 100000 2 <= C <= N 0 <= xi <= 1000000000

function maximumGame(coins, n) {
    if (n === 0) return 0;
    if (n === 1) return coins[0];

    // Initialize dp array
    let dp = new Array(n).fill(0);

    // Base cases
    dp[0] = coins[0];
    dp[1] = Math.max(coins[0], coins[1]);

    // Fill dp array
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(coins[i] + (i >= 2 ? dp[i - 2] : 0), dp[i - 1]);
    }

    // Return the maximum coins that can be collected
    return dp[n - 1];
}
