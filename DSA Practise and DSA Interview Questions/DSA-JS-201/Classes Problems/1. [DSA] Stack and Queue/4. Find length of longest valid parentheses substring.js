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


//sc= On, tc=On
function longestValidParentheses(s) {
    //when (, add position to the stack
    //when ), first remove whats in stack, then 
    //if stack empty add postion
    // else, calculate length i-stack[last]

    let stack = [-1] //as the value from which to calculate length from
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length == 0) {
                stack.push(i)
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1])
            }
        }
    }

    return maxLength

}


function main() {
    let S = '()(()(())'
    let ans = longestValidParentheses(S);
    console.log(ans);
}

main()