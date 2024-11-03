// Problem Description
// Given a set of N Countries which are numbered from 1 to N, split the Countries into two groups, of any size, such that the following condition is met.

// If a Country dislikes another Country, they should not be in the same group. If dislikes[i] = [a, b], we should not put Country numbered a and Country numbered b into the same group.

// Print out if this kind of partitioning is possible or not.

// Input format
// First line contains a single integer T, which is the number of test cases.

// For each test case, we’ll see the following lines:

// First line contains two space separated integers N and M, where N denotes the number of countries in the list and M denotes the number of dislikes between countries.

// Next M lines contain two space separated integers each, which denote the country numbers that dislike each other. Countries are numbered from 1 to N.

// Output format
// For each test case, output in a new line, "Possible" without quotes if and only if it is possible to split every Country into the two groups, otherwise print "Not Possible" without quotes.

// Constraints
// 1 <= T <= 1000

// 0 <= N <= 100000

// 0 <= M <= min((N*(N-1))/2,100000)

// Sample Input 1
// 1

// 5 4

// 2 1

// 1 3

// 4 2

// 2 5

// Sample Output 1
// Possible

// Explanation 1
// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_GRAPH_MODULE_ME_PS_DS_CONCEPT_GRAPH_MODULE_POSSIBLEBIPARTITION_image_0.png

// The partitioning that works is this {1,4,5} and {2,3}

// Sample Input 2
// 1

// 3 3

// 2 1

// 1 3

// 2 3

// Sample Output 2
// Not Possible

// Explanation 2
// It is not possible to partition these three countries into two groups according to the condition.

function possibleBipartition(N, edges, edgeslist) {
    // to chek if nodes can be seperated into group A and B (here group 1 and 0 )
    //we assign the current node as group A 
    //then check if it sneighbour has been vsiited (that is check if group of neighbours is A or not)
    // if neighbour group is A (visited) partition not possible. graph not bipratite
    // if neighbour group not assigned yet, assign and push it as next node in queue

    //adjacency list
    let adj = Array.from({ length: N + 1 }, () => [])
    for (let [a, b] of edgeslist) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let group = {}

    function BFS(node) {
        console.log(node)
        group[node] = 1
        let queue = [node]

        while (queue.length > 0) {
            let currNode = queue.shift()
            let nextGroup = 1 - group[currNode] //to flip the group

            for (let neighbour of adj[currNode]) {
                if (!(neighbour in group)) {
                    group[neighbour] = nextGroup
                    queue.push(neighbour)
                } else if (group[neighbour] == group[currNode]){
                    return false
                }
            }
        }

        return true
    }

    for (let node = 0; node < N + 1; node++) {
        if (!(node in group)) {
            if (!BFS(node)) return 'Not Possible'
        }
    }

    return 'Possible'
}

let N = 5, edges = 4, edgeslist = [[2, 1], [1, 3], [4, 2], [2, 5]]
let result = possibleBipartition(N, edges, edgeslist)
console.log(result)