// Problem Description
// An infamous thief goes by the name of Kalia. He is famous for his sheer skills in the field of burglary.

// His next target is a colony containing houses with enormous wealth. A given input array represents the wealth of each house in the colony.

// He wants to steal the maximum possible wealth in one go, but needs to be cautious. He cannot steal from consecutive houses as that would trigger the security alarm.

// You are his sidekick. Help him find the maximum wealth he can steal.

// Input format
// First line contains a number N denoting the number of houses.

// Next line contains N space separated numbers where the ith number denotes the wealth in ith house.

// Output format
// A single number denoting the maximum wealth Kalia can steal.

// Constraints
// 1 <= N <= 100000

// 1 <= Wi <= 1000

// Sample Input 1
// 7

// 2 5 1 3 6 2 4

// Sample Output 1
// 15

// Explanation 1
// The houses with wealth 5 + 6 + 4 = 15 give the maximum wealth he can steal without triggering the security alarm.

function houseThief(n, wealth) {
    //we will store sum of every alternate value
    //and we will take the maximum between each alternate house - beacuse it can be every 2 house or every 3 house

    let arr = []
    arr[0] = wealth[0]
    arr[1] = Math.max(wealth[1], arr[0])

    for (let i = 2; i < n; i++) {
        arr[i] = Math.max(arr[i - 2] + wealth[i], arr[i - 1])
    }

    return arr[n - 1]
}

console.log(houseThief(7, [2, 5, 1, 3, 6, 2, 4]))