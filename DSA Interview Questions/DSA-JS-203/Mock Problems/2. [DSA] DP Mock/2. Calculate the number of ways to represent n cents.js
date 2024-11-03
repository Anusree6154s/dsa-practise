// Problem Description
// Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents) and pennies (1 cent), calculate the number of ways of representing N cents.

// Note: The combination of denominations is what is important. The order doesn’t matter. For example, Nickel + Penny + Penny = 7 Cents or Penny + Nickel + Penny = 7 Cents, are both considered a single way of counting to 7 Cents since they have the same combination.

// Input format
// First and only line will contain a number N, representing N cents.

// Output format
// Number showing the total number of ways, modulo 1e9+7.

// Constraints
// 1 <= N <= 1000000

// Sample Input 1
// 5

// Sample Output 1
// 2

// Explanation 1
// You can come up with these 2 combinations to represent 5 cents

// 5 pennies = 1+1+1+1+1 = 5

// Take a nickel = 5

function coins(n){
    const mod = 1000000007;
    const coins = [1, 5, 10, 25]; // Pennies, Nickels, Dimes, Quarters
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: 1 way to make 0 cents (using no coins)

    for (let coin of coins) {
        for (let j = coin; j <= n; j++) {
            dp[j] = (dp[j] + dp[j - coin]) % mod;
        }
    }

    return dp[n];
}