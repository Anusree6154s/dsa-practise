// Problem Description
// There are N items, numbered 0, 2,..., N-1. For each i (0 ≤ i ≤ N-1), item i has a weight of w[i] and a value of v[i].

// You have decided to choose some of the N items and carry them home in a sack. The capacity of the sack is W, which means that the sum of the weights of items taken must be at most W.

// Find the maximum possible sum of the values of items that you can take home.

// Note: It is recommended to use 64-bit integers for C++ submissions

// Input format
// First line contains two integers N and W, the total number of items and the capacity of the sack respectively.

// The second and third lines both contain N integers, denoting the weights and values of each of the N items respectively.

// Output format
// Print the maximum possible sum of the values of items that you can take home.

// Sample Input 1
// 4 5

// 1 2 3 4

// 6 10 12 7

// Sample Output 1
// 22

// Explanation
// Items 1 and 2 should be taken (0-based indexing). Then, the sum of the weights is 2+3=5, and the sum of the values is 10+12=22.

// Sample Input 2
// 6 15

// 6 5 6 6 3 7

// 5 6 4 6 5 2

// Sample Output 2
// 17

// Explanation
// Items 1,3 and 4 should be taken. Then, the sum of the weights is 5+6+3=14, and the sum of the values is 6+6+5=17.

// Constraints
// 1 ≤ N ≤ 100

// 1 ≤ W ≤ 100000

// 1 ≤ w[i] ≤ W

// 1 ≤ v[i] ≤ 1000000000


function maxValue(W, weight, value) {
    //total capacity = W
    //sort the weights by decreasing value
    //for the last weight, take fraction of weight and value

    let N = weight.length;
    // Initialize a 2D DP array with (N+1) x (W+1) dimensions, filled with 0s
    const dp = Array.from({ length: N + 1 }, () => Array(W + 1).fill(0));

    // Build the DP table
    for (let i = 1; i <= N; i++) {
        for (let w = 0; w <= W; w++) {
            if (weight[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight[i - 1]] + value[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The maximum value that can be taken home is found in dp[N][W]
    return dp[N][W];

    // let arr = []
    // for (let i = 0; i < weight.length; i++) {//O(n)
    //     arr.push([weight[i], value[i]])
    // }

    // arr.sort((a, b) => b[1] - a[1]) //O(nlogn)

    // let totW = 0
    // let totV = 0
    // for (let i = 0; totW < W; i++) {
    //     if (totW + weight[i] <= W) {
    //         totW += weight[i]
    //         totV += value[i]
    //     }
    // }

    // return totV

}