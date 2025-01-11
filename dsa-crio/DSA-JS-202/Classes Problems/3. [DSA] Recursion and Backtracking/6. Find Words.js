// Problem Description
// Given a 2D board and a word, find if the word exists on the board.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input format
// First line will have two integers N , M representing the rows and columns of the board.

// Next N lines will have the board configuration.

// Next line will have a string which is the word that is to be constructed.

// Output format
// true or false

// Sample Input 1
// 3 4

// A B C E

// S F C S

// A D E E

// ABCCED

// Sample Output 1
// true

// Constraints
// The board and word consists only of lowercase and uppercase English letters.

// 1 <= board.length <= 200

// 1 <= board[i].length <= 200

// 1 <= word.length <= 10^3

// Explanation 1
// The sequence ABCCED can be be achieved on the given board by starting at A in the first row and moving sequentially to either horizontal or vertical neighbors

function WordSearch(grid, word) {
    // first loop through th eentire grid to find the first letter
    // if found look if the rest of the word is there around using recursion helper function

    function recursion(i, j, count) {
        if (word.length === 1 && grid[i][j] === word[count]) return true //edge case or one word 

        if (count >= word.length) return true; //if word length has reached successfully, then we have found the word
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '.' || grid[i][j] !== word[count]) return false //(check 3 conditions: i and j bounds, if grid has already been visited, if the word doesnt match the current grid, either of them then return false )

        // if we havent found the word, but instead found a letter, then
        grid[i][j] = '.' // mark as visited
        let x = { 0: 0, 1: 0, 2: 1, 3: -1 } //define x and y coordinates to check for next letter
        let y = { 0: 1, 1: -1, 2: 0, 3: 0 }
        
        let letterExists = false
        for (let direction = 0; direction < 4; direction++) { //in each direction for futher letters
            letterExists = letterExists || recursion(i + x[direction], j + y[direction], count + 1)
        }

        //after checkng for letter existsnce, restore grid value
        grid[i][j] = word[count]
        return letterExists;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (word[0] == grid[i][j]) {
                let wordExists = recursion(i, j, 0)
                if (wordExists) return true //if word exists, return true, else keep checking
            }
        }
    }

    return false
}

let grid =
    [['A', 'B', 'C', 'E'],

    ['S', 'F', 'C', 'S'],

    ['A', 'D', 'E', 'E']]

    , word = 'ABCCED'
let result = WordSearch(grid, word)
console.log(result)
