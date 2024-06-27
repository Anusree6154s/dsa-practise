// Problem Description
// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Input format
// First line will contain the number of integers N.

// Second line will contain N space separated integers.

// Output format
// First line will contain the size S of the powerset.

// Next S lines print space separated elements of each set.

// Sample Input 1
// 3

// 1 2 3

// Sample Output 1
// 8

// 3

// 1

// 2

// 1 2 3

// 1 3

// 2 3

// 1 2

// null

// Constraints
// 1<=N<15

// 1<=Array[i]<=1000000

function subsets(n, arr) {
    // make 2 arrays, one for result and another to make all subsets
    // start a helper function with 0th index of array, and empty subset
    // for each index of array, we will iterate through th earray to add more elements to the same subset (like nested loop)
    // frst we will end up until a subset of 1 to n, then we pop() to elminate 
    // after adding each element
    const result = [];

    // Define a recursive function to generate subsets
    function backtrack(start, subset) {
        // Add the current subset to the result
        result.push([...subset]);

        // Explore all possible subsets by considering each element from the start index
        for (let i = start; i < arr.length; i++) {
            // Include the current element in the subset
            subset.push(arr[i]);

            // Recursively generate subsets starting from the next index
            backtrack(i + 1, subset);

            // Exclude the current element from the subset (backtrack)
            subset.pop();
        }
    }

    // Start generating subsets with an empty subset and index 0
    backtrack(0, []);

    // Return the result
    return result;


    // //SIMPLIFIED APPROACH for BACKTRACKING 
    // // add with and without current element
    // //getthe arrays from both and merge
    // let result = []
    // let subset =[]
    // function backTrack(i) {
    //     if (i === arr.length) {
    //         result.push([...subset])
    //         return
    //     }

    //     //without curr element
    //     backTrack(i + 1)

    //     //with curr eleemnt
    //     subset.push(arr[i])
    //     backTrack(i + 1)
    //     subset.pop() //remove curr element before returning (backtracking)

    // }
    // backTrack(0)

    // return result

    // //RECURSIVE APPROACH without BACKTRACKING
    // let result = [];
    // function backTrack(i, subset) {
    //     if (i === arr.length) {
    //         result.push(subset);
    //         return;
    //     }
    //     // Exclude the current element and move to the next
    //     backTrack(i + 1, subset);

    //     // Include the current element and move to the next
    //     backTrack(i + 1, subset.concat(arr[i]));
    // }
    // backTrack(0, []);
    // return result;

}

let n = 3, arr = [1, 2, 3]
let result = subsets(n, arr)
console.log(result)