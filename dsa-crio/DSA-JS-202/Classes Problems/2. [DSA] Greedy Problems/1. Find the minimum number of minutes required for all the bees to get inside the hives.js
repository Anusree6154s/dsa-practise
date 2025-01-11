// Problem Description
// There are N Bees and N Hives. Each bee has to get inside one hive. Two bees cannot be inside one hive. The Bees and Hives are present at different positions on a straight line and their positions are represented by an input array. The time taken by the bee to move one step left or one step right on the straight line is 1 minute.

// Given the initial position of the bees and hives, find the minimum number of minutes needed for all the bees to get into the hives.

// Input format
// First line contains an integer N, which represents the number of bees and hives

// Second line contains N space separated integers indicating the position of bees

// Third line contains N space separated integers indicating the position of hives

// Output format
// Print the minimum number of minutes required for all the bees to get inside the hives

// Constraints
// 1 <= N <= 100000

// -1e9 <= position <= 1e9

// Sample Input 1
// 3

// 5 -3 9

// 5 8 0

// Sample Output 1
// 3

// Explanation 1
// The first bee at position 5 can enter the hive at position 5 in 0 minutes. The second bee at position -3 can enter the hive at position 0 by moving three steps to the right in 3 minutes. The third bee at position 9 can enter the hive at position 8 by moving one step left in 1 minute.

// So, within 3 minutes, all the bees will be inside hives.

function beesToHives(n, bees, hives) {
    //approach, after sorting and finding times taekn from each bee to reach each hive, the longest time taken will be the min time req by this array of bees
    //     Sorting for Optimal Matching:

    // First, sort both arrays representing the positions of bees and hives. Sorting allows us to efficiently pair each bee with a hive that minimizes the total movement time.
    // Calculate Total Movement Time:

    // After sorting, calculate the total movement time required for each bee to reach its corresponding hive. Since both arrays are sorted:
    // If bee i is at position bees[i] and hive i is at position hives[i], the time taken for bee i to move to hive i is simply the absolute difference |bees[i] - hives[i]|.
    // Summing Up:

    // Sum all these absolute differences to get the total minimum time required for all bees to reach their respective hives.

    hives.sort((a, b) => a - b)
    bees.sort((a, b) => a - b)

    let longestTime = 0
    bees.forEach((beePosition, index) => {
        let time = Math.abs(beePosition - hives[index])
        longestTime = Math.max(time, longestTime)
    })

    return longestTime
}

let n = 3
let bees = [5, -3, 9]
let hives = [5, 8, 0]
let result = beesToHives(n, bees, hives)
console.log(result)