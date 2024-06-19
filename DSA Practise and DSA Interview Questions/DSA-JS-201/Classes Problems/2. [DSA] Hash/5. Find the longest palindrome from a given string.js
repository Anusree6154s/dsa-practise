// Problem Description
// You are given a string consisting of lower and upper case characters.
// You need to find the length of the longest palindrome which you can create by using the characters from the string.
// Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

// Input format
// There are 2 lines of input

// First line contains the size of the string

// Second line contains the string.

// Output format
// Print the length of the longest palindrome possible.

// Sample Input 1
// 4 bbde

// Sample Output 1
// 3

// Explanation
// The possible 3 size palindrome strings are :- beb and bdb

// Constraints
// 1 <= Size of String <= 10^4

//tc=O(n), sc=O(n)-> in case there are no pairs at all
function longestPalindrome(n, str) {
    // we will count no of pairs + left out elements
    //if number of left our elements is more than 1, then no palimdrom, else yes

    //if an element has pair, we will not add it to the map
    //if map.size>1, then false, else true
    //length of palindrome =  pairs*2+1 (if map.size!==0) , else pairs*2

    let map = new Map() //count left out elements
    let pairs = 0 //count pairs

    for (let item of str) {
        if (map.has(item)) {
            map.delete(item)
            pairs++
        } else {
            map.set(item, 1)
        }
    }

    if (map.size !== 0) {
        return pairs * 2 + 1
    } else {
        return pairs * 2
    }
}

const n = 4
const str = 'bbde'
const result = longestPalindrome(n, str)
console.log(result)