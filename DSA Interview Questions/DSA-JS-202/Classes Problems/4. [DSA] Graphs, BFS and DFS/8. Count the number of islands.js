// Problem Description
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

// You may assume all four edges of the grid are all surrounded by water.

// Input format
// First line contains m and n, which represent the number of rows and columns of the grid.

// Next m lines contain n characters each representing 0 or 1.

// Output format
// Print the number of islands

// Sample Input 1
// 4 5

// 11110

// 11010

// 11000

// 00000

// Sample Output 1
// 1

// Sample Input 2
// 4 5

// 11000

// 11000

// 00100

// 00011

// Sample Output 2
// 3

// Constraints
// 1 <=n,m <= 2000

function numIslands(grid) {
    // for an island we will check if it has water on its 4 directions (not diagonals)
    // like in connections problem, we will keep checking for lands on all 4 sides, till watre comes, once water comes on unvisited side, the loop ends
    //then check for next land
    //each time we start a new land, a new island is formed
    //mark visited ones as visited so that we dont go over them again

    if (!grid || grid.length == 0) return 0 //edgecase

    // Convert grid to a 2D array of characters for mutability
    grid = grid.map(row => row.split('').map(Number));
    let visited =  Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

    //define directions
    let x = [0, 1, 0, -1]
    let y = [1, 0, -1, 0]

    function findIsland(row, col) {
        //uisng dfs
        visited[row][col] = true

        for (let i = 0; i < 4; i++) {
            let newRow = row + x[i]
            let newCol = col + y[i]

            //if in bounds and not visited and not 0
            if (newRow >= 0 && newCol >= 0 && newRow < grid.length && newCol < grid[0].length && !visited[newRow][newCol] && grid[newRow][newCol] !== 0) {
                findIsland(newRow, newCol)
            }
        }
    }

    let islands = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let value = grid[row][col]
            if (value == 1 && !visited[row][col]) {
                islands++
                findIsland(row, col)
            }
        }
    }

    return islands
}

let grid = ['11110',

    '11010',

    '11000',

    '00000']
let result = numIslands(grid)
console.log(result)