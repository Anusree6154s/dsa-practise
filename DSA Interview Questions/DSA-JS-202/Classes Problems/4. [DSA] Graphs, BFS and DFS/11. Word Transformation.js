// Problem Description
// Given two words (beginWord and endWord) and a dictionary of words,

// find the length of the shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time

// Each transformed word must exist in the word list. Note that beginWord is not a transformed word and may not exist in the word list.

// Note:

// Return 0 if there is no such transformation sequence

// All words have the same length

// All words contain only lowercase alphabetic characters

// You may assume no duplicates in the word list

// You may assume beginWord and endWord are non-empty and are not the same

// Input format
// First line contains beginWord

// Second line contains endWord

// Third line contains an integer N representing number of words in the dictionary

// Fourth line contains the N space separated words in the dictionary

// Output format
// The value indicating the number of words in the transformation sequence

// Constraints
// 1 <= |beginWord,endWord,wordList[i]| <= 50

// 1 <= |wordList| <= 1000

// Sample Input 1
// hit

// cog

// 6

// hot dot dog lot log cog

// Sample Output 1
// 5

// Explanation 1
// The shortest transformation sequence is hit -> hot -> dot -> dog -> cog

// Length = 5

// Sample Input 2
// hit

// cog

// 5

// hot dot dog lot log

// Sample Output 2
// 0

// Explanation 2
// No transformation sequence is possible from hit to cog since cog isn’t present in the dictionary

function ladderLength(beginWord, endWord, wordList) {
    // ex: hot and dot has the same transformed word *ontimeupdate, so we will create an adjacency list based on that 

    if (!wordList.includes(endWord)) return 0


    //create an adjacency list of *ot -> hot, dot for all words
    let map = new Map()
    //first for beginWord
    for (let pos = 0; pos < beginWord.length; pos++) {
        let transform = beginWord.slice(0, pos) + '*' + beginWord.slice(pos + 1, beginWord.length)
        if (map.has(transform)) {
            map.get(transform).push(beginWord)
        } else {
            map.set(transform, [beginWord])
        }
    }

    //for rest or the words
    for (let word of wordList) {
        for (let pos = 0; pos < word.length; pos++) {
            let transform = word.slice(0, pos) + '*' + word.slice(pos + 1, word.length)
            if (map.has(transform)) {
                map.get(transform).push(word)
            } else {
                map.set(transform, [word])
            }
        }
    }

    // now for each word find its neighbours 
    let queue = [beginWord]
    let visited = new Set()
    visited.add(beginWord)

    let depth = 0
    while (queue.length > 0) {
        depth++
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let word = queue.shift()
            if (word == endWord) return depth

            for (let pos = 0; pos < word.length; pos++) { //form transformations of each word in word list
                let transform = word.slice(0, pos) + '*' + word.slice(pos + 1, word.length)
                for (let option of map.get(transform)) //get the word array of matching transfoen from map
                    if (!visited.has(option)) { //if the word has not been vsiited yet, then push it to queue
                        visited.add(option)
                        queue.push(option)
                    }
            }
        }
    }

    return 0

}

let beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
let result = ladderLength(beginWord, endWord, wordList)

console.log(result)