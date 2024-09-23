// Problem Description
// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words.

// If there is more than one possible answer, return the longest word with the smallest lexicographical order.

// If there is no answer, return the empty string.

// Input format
// First line contains a single integer n - the number of words in the dictionary.

// Second line contains n space separated words.

// Output format
// Print the largest word in the dictionary that satisfies the given condition.

// Sample Input 1
// 7

// a banana app appl ap apply apple

// Sample Output 1
// apple

// Explanation
// Both "apply" and "apple" can be built from other words in the dictionary.

// However, "apple" is lexicographically smaller than "apply".

// The word "apple" can be built one character at a time by "a", "ap", "app", and "appl".

// Constraints
// 1 <= n <= 5*10^4

// Sum of lengths of all words <= 10^5

function longestWordInDictionary(n, words) {
    words.sort();
    let set = new Set();
    let res = '';

    for (let word of words) {
        if (word.length === 1 || set.has(word.slice(0, -1))) {
            set.add(word);
            if (word.length > res.length) {
                res = word;
            }
        }
    }
    return res;
}