// Problem Description
// You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

// If the "compressed" string would not become smaller than the original string, your function should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).


// Input format
// A single line that contains the string S.


// Output format
// A single line that represents the compressed string as specified in the problem.


// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5


// Explanation 1
// First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.


// Constraints
// 1 <= length(S) <= 100000

function stringCompression(s) {
    let result = " "
    let count = 1
    let n = s.length
    for (let i = 0; i < n; i++) {
        if (s[i + 1] === s[i]) {
            count++
        } else {
            result += s[i] + count
            count = 1
        }
    }

    return result
}

let s = "aabccccc"
let result = stringCompression(s);
console.log(result);