// Problem Description
// Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input format
// First line contains a string - The string S.

// Output format
// Print the length of the longest valid substring.

// Sample Input 1
// ()(()(())

// Sample Output 1
// 6

// Explanation
// The last 6 characters of the string forms the longest valid substring i.e. "()(())".

// Constraints
// 0 <= length of string <= 10^5

function longestValidParentheses(s) {
    let stack = [-1] 
    let length = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            if (stack.length !== 0) {
                stack.pop()
                if (stack.length !== 0) {
                    length = Math.max(length, i - stack[stack.length - 1])
                } else { 
                    stack.push(i)
                }
            }
        }
    }

    return length
}


function main() {
    let S = readLine();
    let ans = longestValidParentheses(S);
    console.log(ans);
}
