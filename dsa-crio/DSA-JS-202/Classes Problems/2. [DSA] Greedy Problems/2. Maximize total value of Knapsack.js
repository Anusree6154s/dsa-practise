// Problem Description
// Given weights and values of N items, we have to put these items in a knapsack of capacity W in such a way that maximum capacity is used.

// Note: It is allowed to break items for maximizing the total value of knapsack, i.e., it is not necessary to take the whole item.

// Input format
// The first line contains 2 integers, N and W denoting the number of items and the capacity of the knapsack.

// The second line contains N integers, with the i-th one representing the weight of the i-th item.

// The third line again contains N integers, with the i-th number representing the value of the i-th item.

// Output format
// Print a double value representing the maximum value that can be obtained with the given knapsack capacity.

// The output would be considered correct upto 6 digits of precision.

// Sample Input 1
// 3 4

// 2 2 3

// 100 10 120

// Sample Output 1
// 180.00

// Explanation
// Total maximum value of item we can have is 180.00 for the given capacity of sack by taking the whole of item 1 and (2/3)rd of item 3.

// Constraints
// 1 <= N <= 100000

// 1 <= W <= 100000

// 1 <= weights[i] <= 200000

// 1 <= values[i] <= 1000000000

// Note: It is recommended to use double instead of float to store values in C++ submissions.

function fractionalKnapsack(N, W, weights, values) {
    //Calculate Value to Weight Ratio:

    // For each item, calculate the value-to-weight ratio which helps in determining the most valuable items per unit weight.
    // Sort Items by Ratio:

    // Sort the items in descending order based on the value-to-weight ratio.
    // Fill the Knapsack:

    // Start filling the knapsack with items from the sorted list until the knapsack can no longer accommodate the whole item.
    // If the current item cannot be fully accommodated, take the fractional part of it.
    // Calculate Total Value:

    // Keep adding the values of the items (or their fractions) to get the maximum value.

    //calculate weight to value ratio
    let ratio = []
    for (let i = 0; i < N; i++) {
        ratio.push({ i: i, ratio: values[i] / weights[i] })
    }

    //sort by ratio in descending order
    ratio.sort((a, b) => b.ratio - a.ratio)

    //fill ans with weight by ratio, either full or part depending on if it is less than W
    //we fill the ans with values, 
    let totalValue = 0
    let totalWeight = 0
    for (let i = 0; i < N; i++) {
        let index = ratio[i].i
        let weight = weights[index]
        let value = values[index]

        if (weight + totalWeight <= W) { //if weights sum is less than totalWeight
            totalValue += value
            totalWeight += weight
        } else { //else totalweight - currentWeight first. then find its related value from ratio
            let fractionWeight = W - totalWeight
            let fractionValue = ratio[i].ratio * fractionWeight
            totalValue += fractionValue
            break
        }

    }

    return totalValue
}

let N = 3, W = 4, weights = [2, 2, 3], values = [100, 10, 120]
let result = fractionalKnapsack(N, W, weights, values)
console.log(result)