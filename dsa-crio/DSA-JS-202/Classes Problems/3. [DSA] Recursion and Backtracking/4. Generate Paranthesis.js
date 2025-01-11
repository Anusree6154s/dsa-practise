// Problem Description
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Well-formed parentheses means that each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.

// Input format
// An integer n

// Output format
// All possible well-formed parentheses combinations with n pairs, each on a new line

// Constraints
// 0 <= n <= 15

// Sample Input 1
// 2

// Sample Output 1
// ()()

// (())

// Explanation 1
// These are the only 2 possible combinations with 2 pairs of parentheses, which are balanced.

function balancedBraces(n) {
    let result = []
    function backtrack(open, close, combination) {
        if (combination.length === n * 2) {
            result.push(combination)
            return
        }

        if (open < n) backtrack(open + 1, close, combination + '(') // to add open only if it is less than n
        if (close < open) backtrack(open, close + 1, combination + ')') // to add close only if an open already exists (if open index is greater than close index)
    }

    backtrack(0, 0, '')

    return result
}


let n = 3
let result = balancedBraces(n)
console.log(result)