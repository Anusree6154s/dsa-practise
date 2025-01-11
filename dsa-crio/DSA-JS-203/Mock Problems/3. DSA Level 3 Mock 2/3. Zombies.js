// Problem Description
// A locality is in the shape of a n*m grid where each cell in a grid represents a house. There is a serious virus outbreak in this locality. This deadly virus converts people to zombies. Each cell in the grid has one of the following three values:

// 0 -> House is empty

// 1 -> House has people but not yet infected.

// 2 -> House is infected and has zombies.

// In one minute all the non-empty houses adjacent to an infected house get infected and the people are converted into zombies (Two houses are called adjacent if they share a common edge). If all the people are infected then the government will have to bomb the locality.

// Print the minimum time after which all the non-empty houses get infected (Basically no cells in the grid should be left 1. All cell values should be 2 or 0). If all the non-empty houses will never get infected then print -1.

// Input format
// First line contains two space seperated integers n, m representing dimensions of the grid.

// An n*m size grid is given with values 0, 1 or 2.

// Output format
// Print a single integer denoting the minimum time after which all the non-empty houses get infected. If all the non-empty houses will never get infected then print -1.

// Sample Input 1
// 1

// 3 3

// 2 1 1

// 1 1 0

// 0 1 1

// Sample Output 1
// 4

// Explanation
// At time 0 only the top left cell is infected.

// After 1st minute, scenario

// 2 2 1

// 2 1 0

// 0 1 1

// After 2nd minute, scenario

// 2 2 2

// 2 2 0

// 0 1 1

// After 3rd minute, scenario

// 2 2 2

// 2 2 0

// 0 2 1

// After 4th minute scenario

// 2 2 2

// 2 2 0

// 0 2 2

// Therefore after the 4th minute all the non-empty houses are infected.

// Sample Input 2
// 1

// 1 2

// 0 2

// Sample Output 2
// 0

// Explanation
// At time 0 only the top right cell is infected and the top left house is empty(0 indicates empty house). Therefore the answer is 0 as at time 0 all the non-empty house is infected.

// Sample Input 3
// 1

// 3 3

// 2 1 1

// 0 1 1

// 1 0 1

// Sample Output 3
// -1

// Explanation
// At time 0 only the top left cell is infected.

// After 1st minute, scenario

// 2 2 1

// 0 1 1

// 1 0 1

// After 2nd minute, scenario

// 2 2 2

// 0 2 1

// 1 0 1

// After 3rd minute, scenario

// 2 2 2

// 0 2 2

// 1 0 1

// After 4th minute scenario

// 2 2 2

// 0 2 2

// 1 0 2

// We see that the bottom left cell will never get infected.

// Constraints
// n == grid.length

// m == grid[i].length

// 1 <= n, m <= 10

// grid[i][j] is 0, 1, or 2.

function zombies(n, m, grid) {
    const directions = [
        [1, 0], [-1, 0], // up, down
        [0, 1], [0, -1]  // right, left
    ];

    const queue = [];
    let humans = 0;

    // Initialize the queue with all infected houses and count the humans
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                humans += 1;
            }
        }
    }

    if (humans === 0) return 0; // No humans to infect

    let minutes = 0;

    // BFS to spread the infection
    while (queue.length > 0) {
        const size = queue.length;
        let infectedThisMinute = false;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (newX >= 0 && newX < n && newY >= 0 && newY < m && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    queue.push([newX, newY]);
                    humans -= 1;
                    infectedThisMinute = true;
                }
            }
        }

        if (infectedThisMinute) {
            minutes += 1;
        }
    }

    return humans === 0 ? minutes : -1;
}
