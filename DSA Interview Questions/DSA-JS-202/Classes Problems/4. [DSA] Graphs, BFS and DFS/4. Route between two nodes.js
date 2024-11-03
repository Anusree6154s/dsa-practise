// Problem Description
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// Note: There could be self loops.

// Note: This is a directed graph.

// Input format
// First line contains T, the number of test cases.

// For each test case, the below lines will be present

// First line contains two integers n and m denoting the number of nodes and number of edges in the graph respectively.

// Next m lines contain two integers u and v in each line denoting an edge from node u to node v (nodes are numbered from 1 to n). Note that this edge is unidirectional i.e. from u to v.

// Last line contains two integers x and y denoting the starting node and ending node respectively.

// Output format
// You need to print "yes" if a path exists from node x to node y, otherwise "no", for each test case on a separate line.

// Sample Input 1
// 1

// 5 4

// 1 2

// 2 3

// 3 4

// 4 5

// 1 3

// Sample Output 1
// yes

// Explanation 1
// image

// Find if a route exists from node 1 to node 3. We can go from node 1 to node 2 and then from node 2 to node 3.

// Sample Input 2
// 1

// 4 3

// 1 2

// 2 3

// 3 4

// 3 1

// Sample Output 2
// no

// Explanation 2
// Starting node is 3 and the ending node is 1. We cannot travel from node 3 to node 1 since it is a directed graph.

// Sample Input 3
// 2

// 2 2

// 1 2

// 2 1

// 1 1 → First test case ends here

// 2 1

// 1 2

// 1 1 → Second test case ends here

// Sample Output 3
// yes

// no

// Explanation 3
// In the first test case, the starting node is 1 and the ending node is 1. We can go from from 1 -> 2 then 2 -> 1.

// In the second test case, there is no way to start from 1 and end at 1, since we only have one edge from 1 to 2.

// Constraints
// T: number of test cases (1 <= t <= 10)

// n: number of nodes (1 <= n <= 10000)

// m: number of edges (1 <= m <= 100000)

// u,v: the nodes ( 1 <= u,v <= n)

// x,y: starting node and ending node respectively (1 <= x,y <= n)

// It's guaranteed that the total sum of n and m doesn't exceed 200000

function RouteBetweenNodes(startNode, toReach, numberOfNodes, edgeList) {
    // there will be a node and diff paths to a destintation
    // we will push next node fro every path into a queue, the n take out each element from wuesue and check if it is the destination node
    // basically BFS to check if any next node == destination
    // directed graph: so no checks for parent

    //edgecase if nodes =0, edgelist =0
    if (numberOfNodes == 0 || edgeList == 0) return 'no'

    //create a adjacency list to find neighbours
    let adj = {}
    for (let i = 0; i < numberOfNodes + 1; i++) {
        adj[i] = []
    }
    for (let [a, b] of edgeList) {
        adj[a].push(b)
    }

    let visited = new Set()
    let queue = [startNode]
    while (queue.length > 0) {
        let node = queue.shift()
        for (let neighbour of adj[node]) {
            if (neighbour == toReach) return true
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }


    return false
}

let startNode = 1, toReach = 3, numberOfNodes = 5, edgeList = [[1, 2], [2, 3], [3, 4], [4, 5]]
let result = RouteBetweenNodes(startNode, toReach, numberOfNodes, edgeList)
console.log(result)