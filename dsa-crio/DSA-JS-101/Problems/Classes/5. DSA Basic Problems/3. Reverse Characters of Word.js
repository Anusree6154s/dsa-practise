// Problem Description
// Write a program to reverse the words present in a sentence.

// Input format
// First line contains an string consisting of words separated by spaces.

// Output format
// Return the string with it's words reversed.

// Sample Input 1
// abc def ghi

// Sample Output 1
// cba fed ihg

// Explanation
// abc reversed is cba, def reversed is fed, ghi reversed is igh.

// Constraints
// 1 <= str.length <= 10^5


//tc =n,sc=n
function reverseCharacters(str) {
    let result = ""
    let n = str.length
    let j = 0
    for (let i = 0; i <= n; i++) {
        j = i - 1
        if (str[i] == " " || i === n) {
            while (str[j] !== " " && j >= 0) {
                result += str[j]
                j--
            }
            result += " "
        }
    }

    return result
}

let str = 'abc def ghi'
let ans = reverseCharacters(str);
console.log(ans);