// Problem Description
// Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

// Input format
// First line contains an integer representing the value of T, the number of test cases.

// In next T lines each line contains the string S.

// Output format
// For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

// Constraints
// 1 <= T <= 10

// 1 <= length(S) <= 100000

// Sample Input 1
// 3

// nnaamm

// hello

// Aab

// Sample Output 1
// True

// False

// False

// Explanation 1
// nnaamm is a permutation of namman, which is a palindrome

// hello is not a permutation of any palindrome

// Aab is not a permutation of any palindrome

function isPermutationPalidrome(s) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.delete(s[i])
        } else {
            map.set(s[i], 1)
        }
    }

    return map.size <= 1
}


const s = "nnaamm"
const answer = isPermutationPalidrome(s)
if (answer)
    console.log('True')
else
    console.log('False')
