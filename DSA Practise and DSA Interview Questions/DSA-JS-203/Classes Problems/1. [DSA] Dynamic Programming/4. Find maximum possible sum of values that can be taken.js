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
    //classical 0/1 knapsack problem
    //we do using dp so that we get the optimum result

    for(let i=0; i<W; i++){
        
    }

    
}