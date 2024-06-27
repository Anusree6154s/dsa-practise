// Problem Description
// There are N gas stations positioned along a circular race track.

// Given a gas[] array, at the ith gas station, a race car can fill up a maximum of gas[i] units of gas.

// Given a burn[] array, the race car needs burn[i] units of gas to go from gas station i to gas station (i+1) in circular fashion.

// You have a race car with unlimited tank capacity. You begin the journey with an empty tank at one of the i gas stations. You need to print the starting gas station's index if you can travel around the racetrack (in a right circular direction in the array) and finish at the station where you started. If you cannot find any such gas station, return -1.

// Note: If there are multiple solutions, print the minimum such index.

// Input format
// First line will contain a single integer N.

// Next line will contain N space separated values representing the gas array.

// Next line will contain N space separated values representing the burn array.

// Output format
// Print a single integer. Consider 1-based indexing.

// Constraints
// 1 <= N <= 200000

// 1 <= burn[i],gas[i] <= 1000000

// Sample Input 1
// 5

// 5 1 2 3 4

// 4 2 3 1 5

// Sample Output 1
// 4

// Explanation 1
// Consider 1 based indexing.

// Starting from index 4, you can fill up 3 units of gas in the tank.

// When you travel from index 4 to index 5, you will have 2 units of gas left since you would burn 1 unit. You can fill up 4 units of gas at index 5, ending up with 2 + 4 = 6 units

// When you go from index 5 to index 1 (circular track), you will have 1 unit of gas left since you would burn 5 units. You can fill up 5 units of gas at index 1, ending up with 1 + 5 = 6 units

// When you go from index 1 to index 2, you will have 2 units of gas left since you would burn 4 units. You can fill up 1 unit of gas at index 2, ending up with 2 + 1 = 3 units

// When you go from index 2 to index 3, you will have 1 unit of gas left since you would burn 2 units. You can fill up 2 units of gas at index 3, ending up with 1 + 2 = 3 units

// You can finally go from index 3 to index 4 since you have 3 units of gas and the burn factor is 3. You will be left with 0 gas as you get back to index 4, but you are able to complete a full circle of the track starting at index 4, so the answer is 4.

// Sample Input 2
// 3

// 3 4 3

// 4 3 4

// Sample Output 2
// -1

// Explanation 2
// You cannot choose any position such that you can complete a full circle of the track. So the answer is -1.

function CircularRace(n, gas, burn) {
    //     Approach:
    // Basic Check:

    // First, check if the total amount of gas available across all stations is greater than or equal to the total gas required to complete the circuit. If not, it's impossible to complete the circuit, and we should return -1.
    // Greedy Approach:

    // Use a greedy approach to determine the starting station.
    // If at any point, the total gas in the tank is negative, it means we cannot start from any of the stations before this point.
    // We then reset the starting point to the next station and reset the current gas to zero.

    //PROCESS
    // Calculate the total gas and total burn.
    // If total gas is less than total burn, return -1. (not after each addition, but after the entire summation)
    // Iterate and Track:
    // Iterate over each gas station.
    // Maintain a running sum of gas in the tank.
    // If at any point this running sum becomes negative, reset the starting station to the next station and reset the running sum.
    // Return Result:
    // If the total gas is greater than or equal to the total burn, the last reset starting point will be the required starting station.

    let startingPoint = 0
    let totalGas = 0
    let totalBurn = 0
    let currentGas = 0
    for (let i = 0; i < n; i++) {
        totalGas += gas[i]
        totalBurn += burn[i]

        currentGas += gas[i] - burn[i]
        if (currentGas < 0) {
            startingPoint = i + 1
            currentGas = 0
        }
    }

    if (totalGas < totalBurn) return -1

    // if currentGas at last index turns out -1, totalGas goes less than toal burn thus returning -1 in if statement above
    // so we dont have to have special check to see if starting point is less than n or not
    return startingPoint + 1
}


let n = 5, gas = [5, 1, 2, 3, 4], burn = [4, 2, 3, 1, 5]
let result = CircularRace(n, gas, burn)
console.log(result)
