
// Problem Description
// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return 1 if the edges of the given graph make up a valid tree, and 0 otherwise.

// (Note : A graph is a tree if it has the following properties.

// It is connected

// It has no cycle.)

// Input format
// The first line contains n ,number. The number of nodes in the tree and the number of edges in the tree.

// The next num lines contains the two nodes between which an edge exists.

// Output format
// Return true or false, based on if the graph is a tree or not.

// Sample Input 1
// 5 4

// 0 1

// 0 2

// 0 3

// 0 4

// Sample Output 1
// 1

// Explanation
// The given graph is a tree since it is connected and has no cycles.

// Constraints
// 1<=n<=100000

// 0<=num<=100000

// edges[i].length == 2

// 0 <= ai, bi < n

// ai != bi

// There are no self-loops or repeated edges.

function graphValidTree(n, edges) {
    //points:
    // 1. trees cant have loops - we will check if no.of every visited node equals tot. no.of nodes given to us
    //2. every node needs to be connected

    if (n == 0) return true // empty graph is also a valid tree

    //create an adjacency list: it is an object with ach value being an array of nodes it connects to
    let adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (let [a, b] of edges) {
        adj[a].push(b)
        adj[b].push(a)
    }

    //we will create a set to track visited edges
    let visited = new Set()
    function checkNode(node, prev) {
        if (visited.has(node)) return false

        visited.add(node)
        for(let value of adj[node]){
            if (value == prev) continue //if its a prev node, dont do the node test on it
            if (!checkNode(value, node)) return false//curr node becomes next prev, and first value becomes next node. if no node, return false
        }
        return true //if all goes well return true. connected node exists without cycle
    }


    //we will start from node 0 (graphs always begins from 0) and prev as -1
    return checkNode(0, -1) && visited.size === n
}

let n = 5, edges = [[0, 1], [0, 2], [0, 3], [0, 4]]
let result = graphValidTree(n, edges)
console.log(result)