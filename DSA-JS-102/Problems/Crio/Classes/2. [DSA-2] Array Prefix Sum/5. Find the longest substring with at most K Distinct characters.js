// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.

// Note:

// Uppercase and Lowercase characters should be considered as different characters.

// There can be numbers and special characters as well.

// Input format
// There are 2 lines of input.

// First-line contains two space-separated integers representing the value of N and K.

// The next line contains the string S of length N.

// Output format
// The length of the longest substring T that contains at most K distinct characters.

// Constraints
// 1 <= N <= 10^5

// 0 <= K <= 256

// Sample Input 1
// 5 3

// abacd

// Sample Output 1
// 4

// Explanation 1
// The longest substring that has 3 distinct characters, "abac", is of length 4.

//no window
//tc=n, sc=k
function lengthOfLongestSubstringKDistinct(s, k) {
    let map = new Map()
    map.set(s[0], 1)

    let maxLength = 0
    for (let i = 1; i < s.length; i++) {
        //at every iteration incement existing count of s[i], or add a s[i]
        if (map.has(s[i])) {
            let count = map.get(s[i])
            map.set(s[i], ++count)
        } else {
            map.set(s[i], 1)
        }

        //every iteration, if map.size =k, update maxLength of characters
        if (map.size == k) {
            let length = 0
            for (let [key, value] of map) {
                length = length + value
                maxLength = Math.max(maxLength, length)
            }
        }

        //every iteration, if map.size>k, reduce the currently added element if it already exists
        if (map.size > k) {
            let count = map.get(s[i])
            if (count == 0) {
                map.delete((s[i]))
            } else {
                map.set(s[i], --count)
            }
        }

    }

    return maxLength
}

let [n, k] = [5, 3]
const s = "abacd"

const result = lengthOfLongestSubstringKDistinct(s, k);
console.log(result);