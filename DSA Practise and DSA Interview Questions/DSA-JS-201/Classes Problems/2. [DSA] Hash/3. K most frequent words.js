// Problem Description
// You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, you have to find them.


// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order should come first.

// Input format
// There are three lines of input

// The first line contains N, which is the number of input strings.

// The second line contains N space separated input strings (S).

// The third line contains the value of K.

// Output format
// Print the K most frequent words present inside the book, each in a new line. If two words have the same frequency, then the word with the lower alphabetical order should come first.

// Constraints
// 1 <= N <= 1000

// 1 <= Length(S) <= 100000

// 'a' <= S[i] <= 'z'

// 1 <= K <= Number of Unique Strings

// Sample Input 1
// 1

// bus

// 1

// Sample Output 1
// bus

// Explanation 1
// In the given input, the frequency of "bus" is 1 and it is the 1st most frequent word.

//tc=O(k), sc=O(k)-> in case every word is diff in arr
function frequentWords(words, k) {
    //to find the k most frequent words
    // if more than 1 such words, return a lexicographicaly sorted array

    let map = new Map()
    for (let word of words) {

        //set count
        if (map.has(word)) {
            let count = map.get(word)
            map.set(word, ++count)
        } else {
            map.set(word, 1)
        }
    }

    //return a sorted array
    let arr = Array.from(map.entries()) //array of [key, value] pairs
    arr.sort((a, b) => {
        if (a[1] == b[1]) {
            //if it has a same value, return based on keys lexicographically
            return a[0] - b[0]
        } else {
            //else return based on values in descending order
            return b[1] - a[1]
        }
    })

    return [arr[0][0], arr[1][0]]
}
const n = 8
const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny"];
const k = 2
const result = frequentWords(words, k)
console.log(result)