// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.
// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000
// 0 <= S,E <= 1000000000 (10^9)
// Si < Ei

// Sample Input 1
// 3
// 0 20
// 5 10
// 10 15

// Sample Output 1
// 2

// Explanation 1
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.
// So, only 2 rooms are required if total for the 3 meetings.

//tc=n, sc=n
function meetingRooms(meetings) {
    // first sort all the timings - all.. starting and ending both
    // then count the max no. of rooms that can be opened


    //array of timings and their state, to count++ or count-- based on open or closed
    let arr = []
    for (let i = 0; i < meetings.length; i++) {
        arr.push({ time: meetings[i][0], count: +1 })
        arr.push({ time: meetings[i][1], count: -1 })
    }

    // Sort meetings based on time
    arr.sort((a, b) => a.time - b.time);

    console.log(arr)
    let maxRooms = 0
    let roomCount = 0
    for (let i = 0; i < arr.length; i++) {
        roomCount = roomCount + arr[i].count
        console.log(roomCount)
        maxRooms = Math.max(maxRooms, roomCount)
    }

    return maxRooms
}


let n = 3;
let meetings = [
    [0, 5],
    [1, 2],
    [1, 10],
    [5, 6]
];
console.log(meetingRooms(meetings));


//tdlr of aprroach:
// the max no opened rooms without closing them , is the max no of rooms needed
//when opening +1, when closing -1. if +1 miltiple times without closing or with least closing, then that is answer