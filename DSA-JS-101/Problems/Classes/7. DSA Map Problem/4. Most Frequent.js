// Problem Description
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.
// You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.
// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// Input will contain 1 line containing a string S.

// Output format
// You've to output two things which will be separated by a space: a) The character which occurs the maximum number of times. b) The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Explanation
// e occurs 4 times.

// Constraints
// 1 <= |S| <= 100


//tc=n, sc=n
function mostFrequentDSA(text) {
    //.sort() sorts already based on ascii value by default
    let ans = []
    let map = new Map()

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            let count = map.get(text[i])
            map.set(text[i], ++count)
        } else {
            map.set(text[i], 1)
        }
    }

    let freq = 0
    for (let [key, value] of map) {
        freq = Math.max(freq, value)
    }

    for (let [key, value] of map) {
        if (value === freq) {
            ans.push(key)
        }
    }

    ans.sort

    return [ans[0], freq]

}

let text = 'Statements are unique.'
let result = mostFrequentDSA(text);
console.log(result[0] + " " + result[1]);