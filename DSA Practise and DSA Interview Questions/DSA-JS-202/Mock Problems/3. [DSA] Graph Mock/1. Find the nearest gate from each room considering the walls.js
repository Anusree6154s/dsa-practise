// Problem Description
// You are given a m x n 2D grid initialized with these three possible values:

// -1 - A wall or an obstacle, you cannot go through here.

// 0 - A gate.

// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// You can only move in 4 directions to find the gate, not diagonally.

// Input format
// First line contains 2 space separated integers M and N, where M is number of rows and N is number of columns in the 2D matrix

// Next M lines contain N space separated integers each indicating the values for each row

// Output format
// M lines with N space separated integers, with each line representing the updated values (distance to the nearest gate) for the rooms.

// Constraints
// 1 <= M,N <= 1000

// Sample Input 1
// 4 4

// INF -1 0 INF

// INF INF INF -1

// INF -1 INF -1

// 0 -1 INF INF

// Sample Output 1
// 3 -1 0 1

// 2 2 1 -1

// 1 -1 2 -1

// 0 -1 3 4

// Explanation 1
// The matrix in the output represents the number of steps to get from an empty room (represented by INF in the input) at a particular cell to its nearest gate, without going through a wall (represented by -1)

function wallsAndGates(grid, n, m) {
    //we will first create a queue of gastes (0)
    // we will begin from gates and for its each neighbour assign the distance from it(depth)
    // we will not go over already visited rooms or walls (-1)

    let queue = []
    let visited = Array.from({length: n}, ()=>new Array(m).fill(false))
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] == 0) {
                queue.push([row, col])
                visited[row][col]=true
            }
        }
    }


    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let dist = 0
    while (queue.length > 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift()
            grid[row][col] = dist

            for (let [x, y] of directions) { //for each direction, if room exists, add that to queue
                let newRow = row + x
                let newCol = col + y
                if (newRow < 0 || newCol < 0 || newRow == n || newCol == m || visited[newRow][newCol] || grid[newRow][newCol] == -1) continue //if utof bounds, return
                visited[newRow][newCol] = true
                queue.push([newRow, newCol])

            }
        }
        dist++
    }

    return grid
}

let INF = 2147483647
let grid = [[INF, -1, 0, INF],

[INF, INF, INF, -1],

[INF, -1, INF, -1],

[0, -1, INF, INF]]
let n = 4, m = 4
let result = wallsAndGates(grid, n, m)
console.log(result)