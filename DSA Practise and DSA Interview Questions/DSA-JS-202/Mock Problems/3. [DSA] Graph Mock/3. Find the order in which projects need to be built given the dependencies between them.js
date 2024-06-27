// Problem Description
// You are given a list of projects and a list of dependencies, which is a list of pairs of projects, where the second project is dependent on the first project. All of a project's dependencies must be built before the project is.

// Find a build order that will allow the projects to be built according to their dependencies. If there is no valid build order, print -1.

// Input format
// First line contains two space separated integers N and D, where N is the number of projects and D is the number of dependencies, respectively.

// Second line contains N space separated strings which are the names of the N projects.

// Next D lines contain two space separated strings P and Q, which says project Q depends on project P (P and Q will be among the project names specified on the second line).

// Output format
// Print the space separated project names in the order they should be built.

// If there are multiple such orders possible, you can print any one of them.

// If there is no possible way to build, print -1.

// Constraints
// N <= 500

// 1 <= D <= min(N*(N-1)/2,100000)

// 1 <= Project name string length <= 10

// Sample Input 1
// 5 3

// A xy a c b

// a xy

// b A

// xy c

// Sample Output 1
// a b xy A c

// Explanation 1
// In this example, there are 3 dependencies. The projects can be built in any order satisfying these 3 dependencies i.e. a should be built before xy, b should be built before A, and xy should be built before c.

// The order "a b xy A c" is one such order.

function buildOrder(project, depend) {
    //project is the array of project name, depend is the array of edges
    //to find the order of nodes based on incoming degree of edges
    // so topological sort question using inDegree

    //convert depend array to numbered edgelist
    // let map = new Map()
    // for (let i = 0; i < project.length; i++) {
    //     map.set(project[i], i + 1)
    // }
    // let edgelist = [...depend]
    // for (let i = 0; i < depend.length; i++) {
    //     edgelist[i][0] = map.get(depend[i][0])
    //     edgelist[i][1] = map.get(depend[i][1])
    // }

    // let nodes = project.length

    // //create inDegree Array and result and adjaceny list
    // let adj = Array.from({ length: nodes + 1 }, () => [])
    // let inDegree = new Array(nodes + 1).fill(0)
    // for (let [a, b] of edgelist) {
    //     adj[a].push(b)
    //     inDegree[b]++
    // }
    // let result = []

    // let queue = []
    // let visited = new Set()
    // for (let i = 1; i < inDegree.length; i++) {
    //     if (inDegree[i] === 0) queue.push(i)
    // }

    // while (queue.length > 0) {
    //     let node = queue.shift()
    //     result.push(node)

    //     for (let neighbour of adj[node]) {
    //         inDegree[neighbour]--
    //         if (inDegree[neighbour] === 0) {
    //             visited.add(neighbour)
    //             queue.push(neighbour)
    //         }
    //     }
    // }

    // for (let [key, value] of map) {
    //     for (let i = 0; i < result.length; i++) {
    //         if (result[i] === value) {
    //             result[i] = key
    //         }
    //     }
    // }
    
    // return result

     const graph = new Map();
    const indegree = new Map();
    
    // Initialize graph and indegree map
    project.forEach(item => {
        graph.set(item, []);
        indegree.set(item, 0);
    });
    
    // Build the graph and indegree map
    depend.forEach(([P, Q]) => {
        graph.get(P).push(Q);
        indegree.set(Q, indegree.get(Q) + 1);
    });

    // Find all nodes with 0 indegree
    const queue = [];
    indegree.forEach((value, key) => {
        if (value === 0) {
            queue.push(key);
        }
    });
    
    const buildOrder = [];
    
    // Process the nodes
    while (queue.length > 0) {
        const current = queue.shift();
        buildOrder.push(current);
        
        graph.get(current).forEach(neighbor => {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        });
    }
    
    // Check if there was a cycle
    if (buildOrder.length === project.length) {
        console.log(buildOrder.join(' '));
    } else {
        console.log(-1);
    }
}

let project = ['A', 'xy', 'a', 'c', 'b'], depend = [['a', 'xy'], ['b', 'A'], ['xy', 'c']]
let result = buildOrder(project, depend)
console.log(result)