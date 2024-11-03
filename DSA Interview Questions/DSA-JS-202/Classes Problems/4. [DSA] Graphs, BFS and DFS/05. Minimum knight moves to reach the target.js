// Problem Description
// Given a square chessboard of N*N size, the position of a Knight and the position of a target, find the minimum number of moves it would take for the knight to reach the target.

// As a reminder, a Knight always moves 2 squares in one direction and 1 square in the perpendicular direction (or vice-versa). In other words, if a Knight is on cell (r, c), then it can move to one of the following 8 cells in a single move

// (r+2, c+1), (r+2, c-1), (r-2, c+1), (r-2, c-1), (r+1, c+2), (r+1, c-2), (r-1, c+2), (r-1, c-2)

// Also, obviously, it is not allowed for the knight to move outside the board.

// Input format
// The first line contains N, the length of the chessboard

// The second line contains two integers x1 and y1, denoting the initial position of the knight.

// The third line again contains two integers, x2 and y2, denoting the position of the target.

// Output format
// Return a single integer representing the minimum steps a Knight will take to reach the target position.

// Sample Input 1
// 8

// 2 1

// 8 5

// Sample Output 1
// 4

// Explanation
// The knight is initially at position [2,1]. It has 3 possible blocks to move to, [4,2], [3,3], and [1,3]. The knight chooses [4,2]. Now, there are 6 more possible blocks to move to. The knight chooses [5,4]. Further, the knight chooses position [7,3]. Finally, the knight moves to the target position which is [8,5] which calculates to 4 steps.

// Sample Input 2
// 6

// 4 5

// 1 1

// Sample Output 2
// 3

// Explanation
// Knight can make the following moves to reach from (4, 5) to (1, 1) in 3 steps

// (4, 5) -> (5, 3) -> (3, 2) -> (1, 1). No shorter path is possible.

// Constraints
// 4 <= N <= 2000

function knightWalk(N, M, x1, y1, x2, y2) {
    // we will do by BFS, cause the board is infinite (we dont know ehere to stop in case we use DFS)
    // fa knight can take 8 new moves.
    // each level of 8 moves is a new step
    // for each move we check its own 8 moves. If any one matches with target, thats the ans

    if (x1 == x2 && y1 == y2) return 0 //edge case when target is at starting position

    //define cordinates for the 8 new positions
    let X = [1, -1, 2, 2, 1, -1, -2, -2]
    let Y = [2, 2, 1, -1, -2, -2, 1, -1]

    //while loops for pushing into queue and visited set to keep track of visited nodes
    let visited = new Set()
    visited.add(`${x1} ${y1}`) //we already visited first position
    let queue = [[x1, y1, 0]] //only then will we push it into the queue

    while (queue.length > 0) {
        let [x, y, steps] = queue.shift()
        if (x == x2 && y == y2) return steps //if ans, return ans
        for (let j = 0; j < 8; j++) { //else update all new 8 coordinates for this x1, y1
            let newX = x + X[j]
            let newY = y + Y[j]
            if (newX > 0 && newY > 0 && newX <= N && newY <= M && !visited.has(`${newX} ${newY}`)) { //coordinates arent out of bounds and has not been visited, then update queue and visited
                visited.add(`${newX} ${newY}`)// update visited as soon as removing from queue
                queue.push([newX, newY, steps + 1])
            }
        }
    }

    return -1

}


let N = 8, M = 8, x1 = 2, y1 = 1, x2 = 8, y2 = 5
let result = knightWalk(N, M, x1, y1, x2, y2)
console.log(result)