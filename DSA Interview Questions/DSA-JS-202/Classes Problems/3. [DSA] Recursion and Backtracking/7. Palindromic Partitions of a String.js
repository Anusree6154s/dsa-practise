// Problem Description
// Given a string s, partition s into substrings such that each substring is a palindrome.

// Return all possible palindrome partitioning of s.

// Input format
// The string s.

// Output format
// On each new line, print a different way of partitioning the string into substrings that are palindromes.

// Constraints
// 0 <= |s| <= 18

// Sample Input 1
// aabc

// Sample Output 1
// aa b c

// a a b c

// Explanation 1
// The 2 sets of substrings shown are the ways in which the given string can be partitioned such that all substrings are palindromes.

function palindromePartitioning(str) {
    let result = []
    function isPalindrome(string) {
        if (string.length == 1) return true
        let i = 0
        while (i < Math.floor(string.length / 2)) {
            if (string[i] !== string[string.length - 1]) return false
            i++
        }
        return true
    }

    function backtrack(start, subset) {
        if (start === str.length) {
            result.push([...subset])
            return
        }

        for (let i = start; i < str.length; i++) {
            let substring = str.slice(start, i + 1)
            if (isPalindrome(substring)) {
                console.lo
                subset.push(substring)
                backtrack(start + 1, subset)
                subset.pop()
            }
        }
    }

    backtrack(0, [])

    return result
}


let str = 'aabc'
let result = palindromePartitioning(str)
console.log(result)