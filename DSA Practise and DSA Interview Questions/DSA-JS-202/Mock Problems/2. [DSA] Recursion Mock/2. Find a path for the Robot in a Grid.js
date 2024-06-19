// Problem Description
// Imagine a robot sitting in the upper left corner of a grid with R rows and C columns. The robot can only move in two directions, right and down. Certain cells are "off limits" such that the robot cannot step on them. Find a path for the robot from the top left to the bottom right.

// Input format
// First line will contain two space separated integers N and M, where N denotes the number of rows and M denotes the number of columns in the grid, respectively.

// Next N lines will have M space separated integers which represent the grid. A 0 value means the robot can enter this cell and 1 value means this cell is blocked.

// Output format
// Print the path from (1,1) to (N,M) that the robot can take.

// On each line, print the Row and Col numbers of the cell, separated by space which the robot next goes to, along its path. The numbering for Rows and Columns start from 1, not 0.

// Print 'Not Possible' if there is no path to reach (N,M) from (1,1)

// Note: There could be multiple correct paths, any one path can be specified.

// Constraints
// 1 <= N,M <= 1000

// Sample Input 1
// 3 3

// 0 0 1

// 0 1 0

// 0 0 0

// Sample Output 1
// 1 1

// 2 1

// 3 1

// 3 2

// 3 3

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_RECURSION_MOCK_MODULE_ME_DSA_RECURSION_MOCK_MODULE_ROBOTINAGRID_image_0.png

// The robot starts from (1,1) and can go through this path - (2,1) (3,1) (3,2) - to reach (3,3) which is the bottom right corner. This is a path which doesn’t contain any cells with 1 (off limit cells).

// Sample Input 2
// 2 8

// 0 0 0 1 0 1 1 0

// 1 0 0 0 1 0 1 0

// Sample Output 2
// Not Possible


function RobotInAGrid(input1, a, b) {}