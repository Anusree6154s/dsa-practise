// Problem Description
// Given a connected undirected unweighted graph, a source and a destination, we need to find the shortest path from source to destination in the graph in the most optimal way.

// Note: It is guaranteed that a path exists from source to destination since it is a connected graph.

// Note: There could be multiple shortest paths from source to destination. You can output any one of these paths.

// Note: The path from a node to itself is just the node number.

// Input format
// In the first line you are given the number of nodes in the graph N and the number of edges M respectively.

// Next M lines contain two integers (graph nodes) denoting an edge between the first and second integer (nodes are numbered from 1 to N). These edges are bidirectional (undirected).

// Next line will have two integers, the first denoting the source node and the second denoting the destination node.

// Output format
// You have to print the most optimal path from source to destination, with one node number on each line, starting with the source node and ending with the destination node.

// Constraints
// 1 <= N <= 50000

// 1 <= M <= min(n*(n-1)/2,100000)

// 1 <= source,destination <= N

// Sample Input 1
// 8 10

// 1 2

// 1 4

// 2 3

// 4 5

// 4 8

// 5 6

// 5 7

// 5 8

// 6 7

// 7 8

// 1 8

// Sample Output 1
// 1

// 4

// 8

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_GRAPH_MODULE_ME_PS_DS_CONCEPT_GRAPH_MODULE_SHORTESTPATH_image_0.png

// We have to find the shortest path from 1 to 8. We can go from 1 to 4 and then from 4 to 8, this being the shortest path between the two nodes.

function shortestPath(nodes, edgeslist, source, destination) {
    //we will maintain a parent array, to keep track of parent of each node
    //we will do bfs and update new node parents
    // if any node is destination node, then we will make an ans array by pushing parent of each parent till source, and then reverse and return that array

    if (source == destination) return 0 // edgecase when destination is at source

    // form an adjacency list for each node 
    let adj = Array.from({ length: edgeslist.length }, () => new Array())
    for (let [a, b] of edgeslist) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let queue = [source] //define queue

    //define distance 
    let parent = new Array(nodes + 1)
    parent[source] = -1

    //define visited
    let visited = new Set()
    visited.add(source)

    while (queue.length > 0) {
        let node = queue.shift()

        if (node == destination) {
            let path = []
            while (node !== -1) {
                path.push(node)
                node = parent[node]
            }
            return path.reverse()
        }
        
        for (let neighbour of adj[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                parent[neighbour] = node
                queue.push(neighbour)
            }
        }
    }

    return null
}

let nodes = 8, edgeslist = [[1, 2], [1, 4], [2, 3], [4, 5], [4, 8], [5, 6], [5, 7], [5, 8], [6, 7], [7, 8]], source = 1, destination = 8
let result = shortestPath(nodes, edgeslist, source, destination)
console.log(result)