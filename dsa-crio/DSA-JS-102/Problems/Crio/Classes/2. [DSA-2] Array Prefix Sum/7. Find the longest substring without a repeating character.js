// Problem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format
// Input is a string.

// Output format
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input 1
// aabcccbcb

// Sample Output 1
// 3

// Explanation 1
// "abc" is the longest substring with no repeating characters.

//tc=n sc=n
function longestSubstringWithoutRepeatingCharacter(s) {
    let maxLength = 0
    let map = new Map()


    let left = 0
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            let position = map.get(s[right])
            if (position >= left) {
                left = position + 1
            }
        }

        map.set(s[right], right)
        let length = right - left + 1
        maxLength = Math.max(maxLength, length)

    }



    return maxLength
}

let s = 'abcabcbb'
let result = longestSubstringWithoutRepeatingCharacter(s);
console.log(result);