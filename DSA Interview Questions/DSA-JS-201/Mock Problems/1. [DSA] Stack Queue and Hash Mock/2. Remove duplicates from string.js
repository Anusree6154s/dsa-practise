// Problem Description
// You are given a string s, consisting of lowercase letters. You need to make duplicate removal on s until you no longer can.


// A duplicate removal consists of choosing two adjacent equal characters and removing both of them.
// Return the final string after all such duplicate removals have been made.
// Input format
// The first line contains a single string s.

// Output format
// Print the final string after duplicate removals.

// Function definition
// You have to complete the given function. It accepts one argument -the input string, and returns the updated string.

// Sample Input 1
// abbaca

// Sample Output 1
// ca

// Explanation
// Initial String: abbaca

// After removing "bb" : aaca

// After removing "aa" : ca (There are no more duplicates)

// Constraints
// 1 <= |s| <= 10^5

function removeAdjacentDuplicates(s) {
    // to remove characters that repeat 2 times 
    //using stack. add a value. if similar value comes as last element, pop teh last value in stack, else push it in 

    let stack = []
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove the duplicate character
        } else {
            stack.push(char); // Add the current character to the stack
        }
    }
    return stack
}
let s = 'abbaca'
let result = removeAdjacentDuplicates(s);
console.log(result);