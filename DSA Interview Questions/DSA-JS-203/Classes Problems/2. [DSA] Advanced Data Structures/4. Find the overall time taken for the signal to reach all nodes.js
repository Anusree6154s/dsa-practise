// Problem Description
// There are N network nodes, labeled 1 to N.

// You are given a list of signal travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

// Now, we transmit a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

// Note: If there are duplicate edges, consider the edge having minimum weight.

// Input format
// First line contains two space separated integers N and E, where N represents the number of network nodes and E represents the number of connections between the nodes, respectively.

// Next E lines contain three space separated integers U,V and W, where U is the source node number, V is the target node number and W is the time taken for the signal to go from node U to node V. (Nodes are numbered from 1 to N)

// Next line contains an integer K, which is the node from which the signal is generated.

// Output format
// Print the overall time taken for the signal to reach all nodes.

// Constraints
// N <= 500

// E <= min(N*(N-1),100000)

// W <= 1000000 (10^6)

// 1 <= U,V <= N

// Sample Input 1
// 4 6

// 1 2 3

// 1 3 5

// 3 1 2

// 2 3 1

// 3 4 2

// 4 1 2

// 1

// Sample Output 1
// 6

// Explanation 1
// In the given graph, the time required by the signal to reach node 1,2,3,4 will be 0,3,4,6 respectively.

// image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_NETWORKDELAYTIME_image_0.png

/**
 * @param {number} nodes
 * @param {number} source
 * @param {number[][]} edges
 * @return {number}
 */

function networkDelayTime(nodes, edges, source) {
    const time = Array(nodes + 1).fill(Infinity);
    time[source] = 0;
    for (let i = 0; i < nodes; i++) {
        for (const [u, v, t] of edges) {
            if (time[u] === Infinity) continue;
            if (time[v] > time[u] + t) {
                time[v] = time[u] + t;
            }
        }
    }

    let res = 0;
    for (let i = 1; i <= nodes; i++) {
        res = Math.max(res, time[i]);
    }
    return res === Infinity ? -1 : res;
}