// Problem Description
// Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

// You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

// Input format
// There are 2 lines of input

// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Return the array space separated in the first line.

// Function definition
// You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

// Sample Input 1
// 6 3

// 1 2 1 3 4 3

// Sample Output 1
// 2 3 3 2

// Explanation
// First range will be [1,2,1] , in which number of distinct elements are 2

// Second range will be [2,1,3], in which number of distinct elements are 3

// Third range will be [1,3,4], in which number of distinct elements are 3

// Fourth range will be [3,4,3], in which number of distinct elements are 2

// Constraints
// 1<=N<=100000

// 1<=B<=100000

// 1<=Ai<=10000

//tc=O(n), sc=O(n)-> in case b=1 aka window is 1
function countDistinctElements(n, b, arr) {
    //window problem

    //for loop for first creating the window
    //once window created, while loop to maintain it

    //we maintain 2 variables: 
    //one for the element to be removed (in end - arr[right-b])
    //other for the element to be added (in front - arr[right])

    //reduce count of removing element, add count of adding element

    let ans = []
    let map = new Map()
    let left = 0
    for (let right = 0; right < n; right++) {
        if (map.has(arr[right])) {
            let count = map.get(arr[right])
            map.set(arr[right], ++count)
        } else {
            map.set(arr[right], 1)
        }

        while (right - left + 1 == b) {//this loop will run only once every round
            //update distinct elements
            ans.push(map.size)

            //remove old element from window
            let count = map.get(arr[left])
            if (count == 1) {
                map.delete(arr[left])
            } else {
                map.set(arr[left], --count)
            }

            //move left pointer
            left++
        }
    }

    return ans
}
let [n, b] = [6, 3]
let arr = [1, 2, 1, 3, 4, 3]
let result = countDistinctElements(n, b, arr);
console.log(...result);