// Problem Description
// Given an undirected graph. Find if there exists a cycle in it or not

// Input format
// First line contains T, the number of test cases.

// For each test case:

// The first line will have two space separated integers denoting the number of nodes N and number of edges E

// The next E lines will contain two space separated integers U and V each, representing nodes which have an edge between them. Nodes are numbered 1 to N.

// Output format
// For each test case, print "Yes" if there is a cycle in the graph and "No" if there is no cycle, on a separate line.

// Constraints
// 1 <= N <= 1000

// 1 <= E <= 100000

// Sample Input 1
// 1

// 3 3

// 1 2

// 2 3

// 3 1

// Sample Output 1
// Yes

// Explanation 1
// This is a complete graph where each node is connected to every other node and the number of nodes is greater than 2. So, there is a cycle.

// Sample Input 2
// 1

// 3 2

// 1 2

// 2 3

// Sample Output 2
// No

// Explanation 2
// This is a simple tree which is acyclic

function detectCycle(nodes, edges, edgeslist) {
    //points:
    //1. its prev will not be equal to visited node, and still its must have visited an node to have a cycle


    if (nodes === 0 || edges.length === 0) return "No" //edge case


    // lets create an adjacency list to keep track of all nodes eah node is going to visit 
    let adj = {}
    for (let i = 0; i < nodes; i++) {
        adj[i] = []
    }
    for (let [a, b] of edgelist) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let visited = new Set()
    function checkCycle(node, prev) {
        if (visited.has(node)) return true

        visited.add(node)
        for (let value of adj[node]) {
            if (value === prev) continue
            if (checkCycle(value, node)) return true
        }
        return false
    }

    // for each possible node check for cycle (because we dont know from which node this particular graph starts from)
    // we check like his cause there can be disconnected nodes
    // for each node we need to start from prev -1 
    for (let i = 0; i < nodes; i++) {
        if (!visited.has(i)) {
            if (checkCycle(i, -1)) return 'Yes'
        }
    }

    return "No"

}

let nodes = 5, edges = 3, edgelist = [[3, 3], [1, 2], [2, 3], [3, 1]]
let result = detectCycle(nodes, edges, edgelist)
console.log(result)