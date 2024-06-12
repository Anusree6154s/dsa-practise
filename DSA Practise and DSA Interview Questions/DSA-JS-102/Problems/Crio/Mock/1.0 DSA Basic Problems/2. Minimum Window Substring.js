// Problem Description
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// Input format
// First line contains a string 'S'

// Second line contains a string 'T'

// Output format
// Output the substring in 'S' containing all the characters in 'T'

// Sample Input 1
// ADOBECODEBANC

// ABC

// Sample Output 1
// BANC

// Explanation
// The substring "BANC" contains all the characters in 'T' ('A', 'B' and 'C')

// Constraints
// 1 <= T.length <= S.length <= 10^5

//tc=
// function minimumWindowSubstring(s, t) {
//     //minimum window problem

//     //in such problems first condition forms the window
//     //second while loop subracts and adds to the window 

//     let set = new Set(t)
//     let map = new Map()

//     let start = 0
//     let minLength = s.length
//     let i = 0
//     while (i < s.length) {
//         console.log(i, s[i])
//         if (set.has(s[i])) {
//             console.log(i)
//             map.set(s[i], i)
//             i++
//         }
//         console.log(map, i, s[i])
//         while (map.size == t.length && i < s.length) {
//             console.log(map)
//             console.log(i)
//             console.log(start, i)
//             console.log(s[start], start, i, s[i])
//             minLength = Math.min(minLength, i - start)
//             console.log(minLength)
//             if (map.has(s[start])) map.set(s[start], start)
//             start++
//             i++

//         }
//     }

//     return minLength
// }


function minimumWindowSubstring(s, t) {
    if (t.length > s.length) return "";  // Edge case

    // Frequency map for characters in t
    const tFreq = new Map();
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    const required = tFreq.size;
    let windowFreq = new Map();
    let left = 0, right = 0;
    let formed = 0;
    let minLength = Infinity, minStart = 0;

    while (right < s.length) {
        let char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            formed++;
        }

        // Try to contract the window
        while (left <= right && formed === required) {
            char = s[left];

            if ((right - left + 1) < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }

            windowFreq.set(char, windowFreq.get(char) - 1);
            if (tFreq.has(char) && windowFreq.get(char) < tFreq.get(char)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
}

let s = 'ADOBECODEBANC'
let t = 'ABC'
let ans = minimumWindowSubstring(s, t);
console.log(ans);

