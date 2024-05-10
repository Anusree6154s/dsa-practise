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

// function countVowels(word) {
//     word = word.toLowerCase()
//     let count = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
//             count++
//         }
//     }
//     return count
// }

// let result = countVowels("language");
// console.log(result);

function answer(n, arr) {
    let stack = []
    let ans = new Array(n).fill(-1)
    stack.push(0)
    for (let i = 0; i < n - 1; i++) {
        let nextEle = arr[i + 1]
        let currentEle = arr[stack[stack.length - 1]]
        if (nextEle > currentEle) {
            while (nextEle > currentEle && stack.length > 0) {
                let elementPosition = stack.pop()
                ans[elementPosition] = nextEle
                currentEle = arr[stack[stack.length - 1]]
            }
            stack.push(i + 1)
        } else {
            stack.push(i + 1)
        }
    }

    return ans
}

console.log(answer(9, [1, 5, 3, 2, 1, 4, 2, 3, 2]))