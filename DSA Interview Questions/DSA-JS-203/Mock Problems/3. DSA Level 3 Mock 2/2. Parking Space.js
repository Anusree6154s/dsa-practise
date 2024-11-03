// Problem Description
// You are the owner of a hotel at a hill station. There is a huge demand for guests but you have a limited car parking available. Given the arrival and departure time of all the cars, find the minimum number of car parking spaces needed.

// Input format
// First line contains integer N - Number of cars.

// Next N lines contain 2 integers A, D - Arrival and departure time of ith car.

// Output format
// Print the minimum number of parking spaces required.

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

// Explanation
// One space will be occupied by 1st car (0-20) and the other will be occupied by 2nd car(5-10) and 3rd car(10-15). So only 2 spaces are required.

// Constraints
// N <= 10^5

// 0 <= A < D <= 10^9

function parkingSpace(times) {
    let events = [];
    
    // Populate events with (time, type) tuples
    for (let i = 0; i < times.length; i++) {
        let [arrival, departure] = times[i];
        events.push([arrival, 'arrival']);
        events.push([departure, 'departure']);
    }
    
    // Sort events by time. If times are the same, sort departures before arrivals.
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] === 'departure' ? -1 : 1;
        }
        return a[0] - b[0];
    });
    
    let maxParkingSpaces = 0;
    let currentParkingSpaces = 0;
    
    // Process events
    for (let event of events) {
        if (event[1] === 'arrival') {
            currentParkingSpaces++;
            maxParkingSpaces = Math.max(maxParkingSpaces, currentParkingSpaces);
        } else {
            currentParkingSpaces--;
        }
    }
    
    return maxParkingSpaces;
}