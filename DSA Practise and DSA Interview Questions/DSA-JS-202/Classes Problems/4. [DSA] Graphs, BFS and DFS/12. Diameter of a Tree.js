// Problem Description
// There is an unweighted tree which consists of N nodes. You need to find the largest distance between two nodes in the tree. Distance between two nodes will be the number of edges on a path between the nodes.The path will be unique as it is a tree.

// Input format
// First line contains T, the number of test cases.

// For each test case, we’ll see the following lines

// First line will contain two space separated integers N and E where N represent number of nodes and E is the number of edges

// Next E lines will contain two space separated integers each, U and V, which represent an edge between node U and node V. Nodes are numbered from 1 to N.

// Output format
// For each test case print the answer in a new line.

// Constraints
// 1 <= T <= 500

// 1 <= N <= 100000

// Sample Input 1
// 1

// 4 3

// 1 2

// 1 3

// 4 1

// Sample Output 1
// 2

// Explanation 1
// The longest distance will be between node 2 and 3. There are other possible combinations as well, but the longest distance will be 2.

// Sample Input 2
// 1

// 2 1

// 1 2

// Sample Output 2
// 1

// Explanation 2
// There is only one path which is 1->2. So the longest distance is 1.

function diameterOfTree(nodes, edges, edgeslist) {
    // to find the diameter (lenth of two farthest nodes from each other )
    // we will find one farthest node from given node, then find another farthest node from first one
    // the max distance found the secind time will be the diameter of the tree /graph

    if (nodes == 1 || nodes == 0) return 0

    //create adjacency list
    let adj = Array.from({ length: nodes + 1 }, () => [])
    for (let [a, b] of edgeslist) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let maxDistance = 0
    let farthestNode = 1
    function BFS() {
        let queue = [farthestNode]
        let visited = new Set()
        visited.add(farthestNode)

        let depth = -1
        while (queue.length > 0) {
            depth++

            let size = queue.length
            for (let i = 0; i < size; i++) {
                let node = queue.shift()

                // farthestNode = node

                for (let neighbour of adj[node]) {
                    if (!visited.has(neighbour)) {
                        visited.add(neighbour)
                        queue.push(neighbour)
                        farthestNode = neighbour
                    }
                }
            }
        }
        maxDistance = Math.max(maxDistance, depth)
    }

    BFS()//find farthest node from 1
    BFS()//find farthest node from new farthestNode

    return maxDistance
}

let nodes = 4, edges = 3, edgeslist = [[1, 2]]
let result = diameterOfTree(nodes, edges, edgeslist)

console.log(result)