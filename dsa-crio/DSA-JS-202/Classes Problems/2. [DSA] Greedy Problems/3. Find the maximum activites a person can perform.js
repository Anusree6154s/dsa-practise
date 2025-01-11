// Problem Description
// You are given start and end times of certain activities.

// Find the maximum number of activities that can be performed by a single person.

// Assume that a person can perform only one activity at a time.

// Input format
// First line is an integer N which is the number of activities.

// Then follow N lines denoting the start and end times of the activities

// Output format
// output the maximum activites a person can perform

// Sample Input 1
// 3

// 1 2

// 2 4

// 3 4

// Sample Output 1
// 2

// Explanation
// Person can perform activities from 1 - 2 and 2 - 4 and in total 2 activities

// Constraints
// 1<= N <= 200000

// 1<= times <= 10^9

function activitySelection(starting, ending) {
    // meetingroom kind of problem
    // store starting and ending time in Array
    // sort the array by ending time in ascending order 
    // forEach element of array, if sarting time is < totalEndingTime, add the no. of activities and change the new totalEndingTime as current ending time

    let arr = []
    for (let i = 0; i < starting.length; i++) {
        arr.push({ start: starting[i], end: ending[i] })
    }

    arr.sort((a, b) => a.ending - b.ending)

    let totalActivities = 0
    let totalEndingTime = 0
    arr.forEach(item => {
        if (item.start >= totalEndingTime) {
            totalActivities++
            totalEndingTime = item.end
        }
    })

    return totalActivities
}


let starting = [1, 2, 3], ending = [2, 4, 4]
let result = activitySelection(starting, ending)
console.log(result)