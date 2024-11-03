// Problem Description
// There are a total of numCourses courses you have to take, labeled from 1 to numCourses.

// Some courses may have prerequisites, for example to take course 1 you have to first take course 2, which is expressed as a pair: [1,2]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Input format
// First line contains two integers representing the value of numCourse and the number of prerequisite pairs.

// Next number of prerequisite pair lines contains two space separated integers representing a and b where to take course a you have to take course b first.

// Output format
// Print "true" if you can take all the courses, otherwise print "false".

// Sample Input 1
// 2 1

// 2 1

// Sample Output 1
// true

// Explanation:
// There are a total of 2 courses to take.To take course 2 you should have finished course 1. So it is possible.

// Sample Input 2
// 2 2

// 2 1

// 1 2

// Sample Output 2
// false

// Explanation:
// There are a total of 2 courses to take. To take course 2 you should have finished course 1, and to take course 1 you should also have finished course 2. So it is impossible.

// Constraints
// 1 <= numCourse,number of prerequisite pair <= 100000

// 1 <= a,b <= numCourse

function courseSchedule(nodes, edges, edgelist) {
    // It basically asks us to see if the direection graph has a cycle in it or not. 
    // means there is no first course that can be studied. everycourse has a pre-requisite to finish
    // if cyclic, we can not take that course, if else, yes, its possible to take that course

    //detecting cycle by DFS
    // we check if a node has been visited and the same path has been visited. only then cyclic

    //create an adjacency list
    let adj = Array.from({ length: nodes + 1 }, () => [])
    for (let [a, b] of edgelist) {
        adj[a].push(b)
    }

    //to check if it has cycle
    let visited = new Set()
    let pathVisited = new Set()
    function checkCycle(node) {
        if (pathVisited.has(node)) return true //if path visited (and visted: happens together) has node, cycle exists
        if (visited.has(node)) return false //if visited has node ALONE, then no cycle in that path. choose another path

        visited.add(node)
        pathVisited.add(node)
        for (let neighbours of adj[node]) {
            if (checkCycle(neighbours)) return true
        }
        pathVisited.delete(node)

    }

    for(let node=1; node<nodes+1; node++){
        if(!visited.has(node)){
            if(checkCycle(node)) return false //if cycle exists, courses cannot be taken
        }
    }

    return true //else, courses can be taken

    // can also be solved using topologival sort 
    // if topologically sorted number of nodes === nodes given, then it is acyclic (means top sorted nodes will be less than given nodes. all will not be considered)
    // means all will not have indegree equal to 0
}


let nodes = 2, edges = 2, edgelist = [[2, 1], [1, 2]]
let result = courseSchedule(nodes, edges, edgelist)
console.log(result)