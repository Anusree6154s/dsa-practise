// Problem Description
// Given an integer array 'nums' where each element of the array represents the number of chocolates each shop gets. It has been found that the number of chocolates given to each shop is different. Rohan is a guy who wants to buy some chocolates from any shop. His mother has given him a list . The list contains shop numbers from where Rohan is allowed to buy chocolates. Print all the possible combinations of the shops which can be there on that list.The list can also be empty.

// The solution set must not contain duplicate combinations. You can print the combinations in any order.

// Input format
// Given an integer n.

// Given n space separated integers.

// Output format
// Print all the possible combinations.

// Sample Input 1
// 3

// 1 2 3

// Sample Output 1
// 1

// 2

// 1 2

// 3

// 1 3

// 2 3

// 1 2 3

// Explanation
// Print all the possible combinations including no shop on the list.First line is an empty combiantion.

// Constraints
// 1 <= nums.length <= 10

// -10 <= nums[i] <= 10

// All the numbers of nums are unique.

function chocolates(n, a) {
    // let allSubsets = new Set();
    // generateSubsets(a, 0, [], allSubsets);

    // // Convert set to array and sort for lexicographical order
    // let sortedSubsets = Array.from(allSubsets).sort((a, b) => a.length - b.length || a[0] - b[0]);

    // // Prepare result as strings joined by space
    // let results = sortedSubsets.map(subset => subset.join(' '));

    // return results

    // function generateSubsets(shops, idx, currentSubset, allSubsets) {
    //     // Base case: when idx reaches end of shops array
    //     if (idx === shops.length) {
    //         allSubsets.add(currentSubset.slice()); // Add a copy of currentSubset to allSubsets
    //         return;
    //     }

    //     // Recursive case: Include shops[idx] in the subset
    //     currentSubset.push(shops[idx]);
    //     generateSubsets(shops, idx + 1, currentSubset, allSubsets);

    //     // Recursive case: Exclude shops[idx] from the subset
    //     currentSubset.pop();
    //     generateSubsets(shops, idx + 1, currentSubset, allSubsets);
    // }


     const results = [];

    function backtrack(start, currentSubset) {
        // Add the current subset to results (skip adding empty subset)
        if (currentSubset.length > 0) {
            results.push(currentSubset.slice()); // Make a copy of currentSubset
        }

        // Iterate through remaining elements to form new subsets
        for (let i = start; i < a.length; i++) {
            currentSubset.push(a[i]);
            backtrack(i + 1, currentSubset); // Recursively generate subsets starting from i+1
            currentSubset.pop(); // Backtrack: Remove last element to try next element
        }
    }

    backtrack(0, []);

    // Sort results for lexicographical order (if needed)
    results.sort((c, b) => c.length - b.length || c[0] - b[0]);

return results
    // Print each subset
    // results.forEach(subset => console.log(subset.join(' ')));
}