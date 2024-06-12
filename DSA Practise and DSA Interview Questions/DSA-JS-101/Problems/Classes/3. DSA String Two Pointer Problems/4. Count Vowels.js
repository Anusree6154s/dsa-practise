// Problem Description
// Given a string, count the total number of vowels present in that string.


// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation
// There are total 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

// Constraints
// 0 < Length of string < 100

function countVowels(word) {
    word = word.toLowerCase()
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            count++
        }
    }
    return count
}

let result = countVowels("language");
console.log(result);



//tc=n, sc=1