// Problem Description
// Given a directed graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is an edge directed from node B[i][0] to node B[i][1].

// Find whether the graph contains a cycle or not, return 1 if a cycle is present else return 0.

// Input format
// The first line of the input has 2 integers n and e, representing the number of nodes and the number of edges in the graph.

// The next e lines contain 2 integers u and v, showing that there exists an edge directed from node u to node v.

// Output format
// Return 1 if a cycle is present else return 0.

// Sample Input 1
// 5 6

// 1 2

// 4 1

// 2 4

// 3 4

// 5 2

// 1 3

// Sample Output 1
// 1

// Explanation
// The given graph contains cycle 1 -> 3 -> 4 -> 1 or the cycle 1 -> 2 -> 4 -> 1.

// Constraints
// 2 <= n <= 100000

// 1 <= edges.size <= min(200000,A(A-1))

// 1 <= edges[i][0], edges[i][1] <= n

function cycleDirectedGraph(A, B) {
    //same as undirected graphs, but :
    //1. we need to check if the reappearing element is in the same path and not a diff path
    //2. no.of nodes are less than edges, therefore nodes have to always be iterated upto node+1 length
    // we will check if an element has ben revisited, and the same pathis revisited
    // no need to chec for prev nodes, as in directed raph it will not point back to dire


    if (A === 0 || B.length === 0) return 0//edge case


    //first create adjacency list
    let adj = {}
    for (let i = 0; i < A + 1; i++) {
        adj[i] = []
    }
    for (let [a, b] of B) {
        adj[a].push(b)
    }

    let visited = new Set()
    let pathVisited = new Set()
    function checkCycle(node) {
        if (pathVisited.has(node)) return 1 // only path visited needs to have a repeated element for cycle detection
        if (visited.has(node)) return 0 //if only visited has a repeated element, that is not cycle

        visited.add(node)
        pathVisited.add(node)
        for (let value of adj[node]) {
            if (checkCycle(value)) return 1
        }
        pathVisited.delete(node)
        return 0
    }

    for (let i = 0; i < A + 1; i++) {
        if (!visited.has(i)) {
            if (checkCycle(i)) return 1
        }
    }

    return 0

}

let A = 6, B = [[1, 2], [4, 1], [2, 4], [3, 4], [5, 2], [1, 3]]
let result = cycleDirectedGraph(A, B)
console.log(result)