// Problem Description
// You are given N packets of Donuts, each packet containing a varying number of donuts. You have to pick total B packets from either left or right end to get the maximum number of donuts.

// Input format
// First line will contain two space separated integers N and B respectively.

// Second line will contain N space separated A[i] - specifying the number of donuts in each packet.

// Output format
// Print the answer in a single line.

// Sample Input 1
// 6 4

// 2 3 1 2 5 1

// Sample Output 1
// 11

// Explanation
// (2+3) + (5+1) = 11

// We will have the maximum donuts for two packets from the left side and two packets from the right.

// Constraints
// 1 <= N <= 10^5

// 1 <= Ai <= 10^4

// 1 <= B <= N

function donuts(N, B, A) {
    let currentSum = 0;
    for (let i = 0; i < B; i++) {
        currentSum += A[i];
    }

    // Initialize the maximum sum with the initial sum
    let maxSum = currentSum;

    // Step 2: Iterate from 1 to B and update the sum
    for (let i = 1; i <= B; i++) {
        // Remove the leftmost packet from the current sum
        currentSum -= A[B - i];
        // Add the rightmost packet to the current sum
        currentSum += A[N - i];
        // Update the maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}