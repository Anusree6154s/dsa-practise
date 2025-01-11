// Problem Description
// Given an array of positive numbers, where each element represents the maximum number of hops that can be made forward from that element, write a program to find the minimum number of jumps needed to reach the end of the array (starting from the first element). Return -1 if it is not possible to reach the end of the array. If an element is 0, then we cannot jump from that element.

// Note: A Jump indicates moving from one index to another using single or multiple hops where a Hop indicates moving to the immediate next neighbor.

// Input format
// First line will have an integer N denoting the length of the array.

// Second line will have N space separated integers denoting the maximum hops from each position in the array.

// Output format
// Minimum number of jumps needed to reach the end of the array or -1 if it is not possible.

// Constraints
// 1 <= n <= 1000

// 0 <= a[i] <= n-1

// Sample Input 1
// 11

// 1 3 5 8 9 2 6 7 6 8 9

// Sample Output 1
// 3

// Explanation 1
// 1 -> 3 -> 8 -> 9

// Start from the first position and make a jump using 1 hop.

// Now we are in second position where we can do a maximum of 3 hops. We take a jump with 2 hops to get to the fourth position.

// At this position, we can do a maximum of 8 hops, we make a jump with 7 hops to get to the last position.

// Multiple sequences are possible but the minimum possible number of jumps will be 3.

function minJumpsToEnd(arr) {
    const n = arr.length;
    if (n <= 1) return 0; // Already at the end or only one element

    let jumps = 0;
    let currentEnd = 0; // furthest index that can be reached with current number of jumps
    let farthest = 0;   // furthest index that can be reached with the next jump

    for (let i = 0; i < n; i++) {
        farthest = Math.max(farthest, i + arr[i]); // Calculate the farthest index we can reach
        if (i === currentEnd) { // If we have reached the end of the current jump range
            jumps++;           // Take a jump
            currentEnd = farthest; // Update the range for the next jump
            if (currentEnd >= n - 1) // If we can already reach or go beyond the last index
                return jumps;       // Return the number of jumps
        }
    }

    return -1; // If we cannot reach the last index
}
