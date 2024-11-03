// Problem Description
// Given arrival and departure times of all trains that reach a railway station.

// Find the minimum number of platforms required for the railway station so that no train is kept waiting.

// Consider that all the trains arrive on the same day and leave on the same day.

// Arrival and departure time can never be the same for a train but we can have the arrival time of one train equal to the departure time of the other.

// At any given instance of time, the same platform can not be used for both departure of a train and arrival of another train.

// In such cases, we need different platforms.

// Input format
// an integer N denoting the number of trains

// then N pairs x,y

// x is the arrival time of ith train

// y is the departure time of ith train

// Output format
// Return the minimum number of platforms required for given schedule of trains

// Sample Input 1
// 3

// 1 2

// 2 3

// 3 4

// Sample Output 1
// 2

// Explanation
// first platform for the trains with time 1-2 and 3-4

// second platform for train with time 2-3

// Constraints
// 1<= N <= 200000

// 1<= time <= 10^9

function minimumPlatforms(n, arr, dep) {
    //meeting room type question
    // To solve the problem of finding the minimum number of platforms required for a railway station so that no train is kept waiting, we need to determine the maximum number of trains present at the station at the same time.

    // Separate Arrival and Departure Times:

    // Extract and sort both arrival and departure times of the trains.
    // Use Two Pointers:

    // Use two pointers to traverse the sorted arrival and departure times.
    // Compare the next train's arrival time with the earliest departure time of the trains currently at the station.
    // Count Platforms:

    // Maintain a count of the current number of trains at the station.
    // Increase the count when a train arrives and decrease the count when a train departs.
    // Track the maximum value of this count to determine the number of platforms required.

    arr.sort((a, b) => a - b)
    dep.sort((a, b) => a - b)

    let maxTrainsAtATime = 0
    let trains = 0
    let i = 0, j = 0
    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            trains++
            i++
        } else {
            trains--
            j++
        }

        maxTrainsAtATime = Math.max(maxTrainsAtATime, trains)
    }

    return maxTrainsAtATime
}

let n = 3, arr = [1, 2, 3], dep = [2, 3, 4]
let result = minimumPlatforms(n, arr, dep)
console.log(result)
