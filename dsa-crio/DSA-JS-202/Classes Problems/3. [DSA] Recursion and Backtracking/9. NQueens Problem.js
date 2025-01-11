// Problem Description
// Print all ways of arranging n queens on an n x n chess board so that none of them share the same row, column or diagonal. In this case, "diagonal" means all diagonals, not just the two that bisects the board or passes through the center.

// Input format
// The number n

// Output format
// Print all the possible arrangements using an n x n board (row and col), where each cell (row, col) will either contain 1 if it has a queen at this cell or 0 if it doesn't. Each arrangement is separated from the next by a new line. If no solution exists, print "No Solution Exists".

// Constraints
// 1 <= n <= 8

// Sample Input 1
// 4

// Sample Output 1
// 0010

// 1000

// 0001

// 0100

// 0100

// 0001

// 1000

// 0010

// Explanation 1
// The output shows the only 2 possible arrangements in a 4 x 4 board where the 4 queens cannot attack each other.

function nQueens(n) {
    // ponts:
    //1. we will move fro row 1 to row n
    //2. each col should only have one queen and will iterate from 0 to n
    //3. each upwards diagonal (posDiag) have teh relation with  rows and cols as row+col is same for every square in that diagonal, and it must have only one queen 
    //3. each downwards diagonal (negDiag) have teh relation with  rows and cols as row-col is same for every square in that diagonal, and it must have only one queen 

    let cols = new Set() // for rows 0 to n
    let posDiag = new Set()  //row+col = 0 to n to ...
    let negDiag = new Set()  //row-col = ... to -2, -1, 0, 1, 2, ...

    let board = Array.from({ length: n }, () => new Array(n).fill(0))
    let result = []
    function backtrack(row) {
        if (row === n) {
            // Using [...board] only creates a shallow copy of the outer array (the rows of the board) but not the inner arrays (the individual rows). This means that if you modify one of the rows in the original board, the same row in the copied board will also be affected
            //board.map(r=>r) also creates shallow copy of each row
            let solution = board.map(row => row.join(''))
            result.push(solution)
            return
        }

        // console.log(cols.)
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) continue

            // if all clear, add all things everywhere
            cols.add(col)
            posDiag.add(row + col)
            negDiag.add(row - col)
            board[row][col] = 1
            backtrack(row + 1) //backtrack for next row
            //in case we return, reset everything back before next iteration
            cols.delete(col)
            posDiag.delete(row + col)
            negDiag.delete(row - col)
            board[row][col] = 0

        }
    }

    backtrack(0)
    return result.map(item=>item.join('\n')+'\n').join('\n')
}


let n = 4
let result = nQueens(n)
console.log(result)