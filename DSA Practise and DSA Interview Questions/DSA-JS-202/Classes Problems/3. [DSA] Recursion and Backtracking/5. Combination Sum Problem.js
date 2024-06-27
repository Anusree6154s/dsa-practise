// Problem Description
// Given an array of distinct integers - candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

// You may return the combinations in sorted order.

// The same number may be chosen from candidates an unlimited number of times.

// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// Elements in each combination must be in non-decreasing order.

// If no combinations are possible, the program prints NA.

// Input format
// The first line contains 2 integers n, target which denotes the number of candidates and the target to be reached respectively.

// The next n lines contain the candidate integers of the n candidates.

// Output format
// Return a list of all unique combinations of candidates where the chosen numbers sum to target.

// Return the combinations in sorted order.

// If no combinations are possible, the program prints NA.

// Sample Input 1
// 4 7

// 2

// 3

// 6

// 7

// Sample Output 1
// [[2,2,3],[7]]

// Explanation
// The given combination of candidates sum up to the target.

// Constraints
// 1 <= candidates.length <= 30

// 1 <= candidates[i] <= 200

// All elements of candidates are distinct.

// 1 <= target <= 500

function combinationSum(candidates, target) {
    let result = []

    function backtrack(sum, subset, start) {
        if (sum === target) {
            result.push([...subset])
            return
        } else if (sum > target) {
            return
        }

        //to not let similar subsets from forming, we muct change the starting candidate each time
        //as in the next iteration it must consider only elements after current element from candidates array
        for (let i = start; i < candidates.length; i++) {
            backtrack(sum + candidates[i], subset.concat(candidates[i]), i )
        }
    }

    backtrack(0, [], 0)

    return result
}



let candidates = [2, 3, 6, 7], target = 7
let result = combinationSum(candidates, target)
console.log(result)
