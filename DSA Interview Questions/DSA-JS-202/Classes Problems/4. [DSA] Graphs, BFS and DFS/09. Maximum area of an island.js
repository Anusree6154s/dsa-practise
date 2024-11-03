// Problem Description
// Given a non-empty 2D array grid of 0s and 1s, an island is a group of 1s (representing land) connected 4-directionally (horizontal or vertical). You may assume all four edges of the grid are surrounded by water. Find the maximum area of an island in the given 2D array (If there is no island, the maximum area is 0).

// Input format
// First line contains 2 space separated integers N and M, representing the number of rows and columns respectively.

// Next N lines contain M space separated integers which can be 0 or 1.

// Output format
// Print the area of the island having maximum area.

// Constraints
// Length of each dimension in the grid does not exceed 500

// Sample Input 1
// 3 5

// 1 1 0 0 0

// 0 1 0 0 1

// 0 0 1 1 1

// Sample Output 1
// 4

// Explanation 1
// There are 2 islands in this example, one with area 3 and the other with area 4. So the answer is 4.



function maxAreaOfIsland(N, M, island) {
    if (!island || island.length == 0) return 0 //edgecase

    // Convert grid to a 2D array of characters for mutability
    // grid = grid.map(row => row.split('').map(Number));
    let visited = Array.from({ length: island.length }, () => Array(island[0].length).fill(false));

    //define directions
    let x = [0, 1, 0, -1]
    let y = [1, 0, -1, 0]

    let maxArea = 0
    let area
    function findIsland(row, col) {
        //uisng dfs
        visited[row][col] = true

        for (let i = 0; i < 4; i++) {
            let newRow = row + x[i]
            let newCol = col + y[i]

            //if in bounds and not visited and not 0
            if (newRow >= 0 && newCol >= 0 && newRow < island.length && newCol < island[0].length && !visited[newRow][newCol] && island[newRow][newCol] !== 0) {
                area++
                findIsland(newRow, newCol)
            }
        }
    }


    for (let row = 0; row < island.length; row++) {
        for (let col = 0; col < island[0].length; col++) {
            let value = island[row][col]
            if (value == 1 && !visited[row][col]) {
                area = 1
                findIsland(row, col)
                maxArea = Math.max(maxArea, area)
            }
        }
    }

    return maxArea
}

let N = 3, M = 5
let Island = [[1, 1, 0, 0, 0],

[0, 1, 0, 0, 1],

[0, 0, 1, 1, 1]]
let result = maxAreaOfIsland(N, M, Island)
console.log(result)