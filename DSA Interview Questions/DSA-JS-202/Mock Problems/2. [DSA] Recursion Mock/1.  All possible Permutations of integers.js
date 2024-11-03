// Problem Description
// Given a collection of distinct integers, return all possible permutations.

// Input format
// First line contains 1 integer N - Number of integers.

// Second line contains N distinct integers.

// Output format
// Print all the permutations on a separate line.

// Sample Input 1
// 3

// 1 2 3

// Sample Output 1
// 1 2 3

// 1 3 2

// 2 1 3

// 2 3 1

// 3 2 1

// 3 1 2

// Constraints
// 1 <= N <= 8

function permutation(nums) {
    //using DFS and backtracking

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums])
            return
        }

        for (let i = start; i < nums.length; i++) {
            // Swap the current element with the start element
            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            // Swap back to backtrack
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }

    }
    let result = []
    backtrack(0)

    return result
}


let nums = [1, 2, 3]
let result = permutation(nums)
console.log(result)