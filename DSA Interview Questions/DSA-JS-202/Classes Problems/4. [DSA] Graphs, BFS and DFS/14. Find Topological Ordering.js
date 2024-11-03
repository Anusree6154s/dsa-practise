// Problem Description
// Topological Sort of a directed graph is a linear ordering of its vertices such that for every directed edge (U,V) from vertex U to vertex V, U comes before V in the ordering.

// Given a directed graph, find the Topological ordering of its vertices.

// Note: A valid topological ordering of the graph will always be present i.e., there will be no cycle.

// Input format
// First line contains two space separated integers N and E, when N represents the number of vertices and E represents the number of directed edges, respectively.

// Next E lines contain two space separated integers U and V, specifying a directed edge from vertex U to vertex V. (Vertices are numbered from 1 to N)

// Output format
// Print the space separate vertex numbers in Topological order

// Constraints
// N <= 500

// 1 <= E <= min(N*(N-1)/2,100000)

// 1 <= U,V <= N

// Sample Input 1
// 5 3

// 1 2

// 1 3

// 4 5

// Sample Output 1
// 1 4 2 3 5

// Explanation 1
// There are multiple solutions possible for this example. In each solution 1 should come before 2 & 3, and 4 should come before 5.

// One such other solution is {1 2 4 3 5}

function topologicalOrdering(N, edges, edgelist) {
    //inDegree array: Array of the number of incoming edges for each node
    //we first push those elements into queu which has 0 incoming edges (parent nodes)
    //then for each element in queu we will reduce the inDegree of its neighbours
    //then we push only those elements into queue who has indegree 0 again
    // this is done because sometimes some neighbours are neighbours of other parent nodes as well. so thye might not be topologically next to current node always.


    //create adjacency list
    let adj = Array.from({ length: N + 1 }, () => [])
    let inDegree = new Array(N + 1).fill(0)
    for (let [a, b] of edgelist) {
        adj[a].push(b)
        inDegree[b]++
    }

    //initialise queue with 0 indegree nodes
    let queue = []
    for (let i = 1; i < inDegree.length; i++) {
        if (inDegree[i] == 0) {
            queue.push(i)
        }
    }

    
    let result =[]
    while (queue.length > 0) {
        let currNode = queue.shift()
        result.push(currNode)

        for (let neighbours of adj[currNode]) { //reduce indegree
            inDegree[neighbours]--
            if(inDegree[neighbours]==0) queue.push(neighbours)
        }
    }

    return result.join(' ')
}


let N = 5, edges = 3, edgeslist = [[1, 2], [1, 3], [4, 5]]
let result = topologicalOrdering(N, edges, edgeslist)
console.log(result)