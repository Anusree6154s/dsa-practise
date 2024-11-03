// Problem Description
// Given an undirected graph, you have to find the number of connected components in that graph.

// Input format
// First line contains 2 integers N and E, representing the number of nodes and edges respectively.

// Next E lines contain 2 space separated integers U and V, representing an edge between nodes U and V. Nodes are numbered from 1 to N

// Output format
// Print the number of connected components.

// Constraints
// 1 <= N <= 100000

// 1 <= E <= 100000

// Sample Input 1
// 5 3

// 1 2

// 3 4

// 4 5

// Sample Output 1
// 2

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_GRAPH_MODULE_ME_PS_DS_CONCEPT_GRAPH_MODULE_CONNECTEDCOMPONENTSINGRAPH_image_0.png

// There are 2 components in this graph {1,2} and {3,4,5}

function connectedComponentsInGraph(nodes, edgelist) {
    //for each node, if not already visited, then it is anew connection
    //inside a non visted node we will visit everynode possible
    //indexing starts from 1

    // create adjacency list 
    let adj = Array.from({ length: nodes + 1 }, () => new Array())
    for (let [a, b] of edgelist) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let visited = new Set()
    function findConnection(node) {
        // we will do bfs 
        let queue = [node]
        visited.add(node)

        while (queue.length > 0) {
            let newNode = queue.shift()
            for (let neighbour of adj[newNode]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }

    let connections = 0
    for (let i = 1; i < nodes + 1; i++) {
        if (!visited.has(i)) {
            connections++
            findConnection(i)
        }
    }

    return connections
}

let nodes = 5, edgelist = [[1, 2], [3, 4], [4, 5]]
let result = connectedComponentsInGraph(nodes, edgelist)
console.log(result)