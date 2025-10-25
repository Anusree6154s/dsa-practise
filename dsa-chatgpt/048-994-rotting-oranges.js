// 994. rotting-oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length
    let n = grid[0].length


    // count fresh oranges
    let queue = []
    let freshCount = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) freshCount++
            if (grid[i][j] === 2) queue.push([i, j])
        }
    }

    const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]]
    let minutes = 0
    // rot oranges by direction
    while (queue.length) {
        let size = queue.length
        let rottedThisMinute = false

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()

            for (const [dx, dy] of directions) {
                const nx = x + dx
                const ny = y + dy

                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2
                    freshCount--
                    queue.push([nx, ny])
                    rottedThisMinute = true
                }
            }

        }

        if (rottedThisMinute) {
            minutes++
        }
    }

    return freshCount === 0 ? minutes : -1
};
