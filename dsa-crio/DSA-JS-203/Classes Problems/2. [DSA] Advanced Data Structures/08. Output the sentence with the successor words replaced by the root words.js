// Problem Description
// In English, we have a concept called root words, which can be followed by some other letters to form a longer word. Let's call these words successor words. For example, the root word "an", followed by the letters “other”, gives us the successor word “another”.

// Now, given a dictionary consisting of many root words and a sentence, you need to replace all the successor words in the sentence with the root words forming them. If a successor word has many root words, replace it with the root word of the shortest length.

// You need to output the sentence after the replacement.

// Input format
// The first line contains N, representing the number of words in the dictionary

// Next line contains N space separated strings representing the words in the dictionary

// Next line contains the sentence which needs to undergo the replacements

// Output format
// The sentence with the successor words replaced by the root words

// Constraints
// The input will only have lower case letters.

// 1 <= N <= 1000

// 1 <= length of each dictionary word <= 100

// 1 <= number of words in the sentence <= 1000

// 1 <= length of each word in the sentence <= 1000

// Sample Input 1
// 3

// cat bat rat

// the cattle was rattled by the battery

// Sample Output 1
// the cat was rat by the bat

// Explanation 1
// The successor words cattle, rattled and battery are replaced by their root words cat, rat and bat in the sentence.

/**
 * @param {String} sentence
 * @param {String[]} dict
 * @return {String}
 */

function replaceWords(dict, sentence) {

    const rootSet = new Set(dict);

    const replaceWord = (word) => {
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.substring(0, i);
            if (rootSet.has(prefix)) {
                return prefix;
            }
        }
        return word;
    };

    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = replaceWord(words[i]);
    }

    return words.join(' ');
}