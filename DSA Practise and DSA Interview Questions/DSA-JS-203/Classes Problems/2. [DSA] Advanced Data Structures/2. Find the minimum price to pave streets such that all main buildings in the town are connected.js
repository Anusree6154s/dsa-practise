// Problem Description
// Once upon a time, King Günther decided to visit all the towns in his kingdom. It was necessary that all the streets that the King used would have to be cobbled with stone.

// Unfortunately, the towns didn’t have much money. The citizens of major towns decided to pave only as many streets as were absolutely necessary to reach every major building since the King would only visit major buildings.

// Can you help the citizens of the town to find out which streets should be paved?

// Note: All major buildings are either at the end of a street or at an intersection.

// Note: In addition to that, you can assume that all buildings are connected by the given streets.

// Input format
// First line would contain T, the number of test cases

// Each test case will have the following lines:

// First line contains three space separated integers, p, n and m, representing the price to pave one furlong of street, the number of main buildings in the town and the number of streets in the town respectively. (Buildings are numbered from 1 to n)

// Next m lines contain three space separated integers a, b and c, where a and b are the building numbers between which the street runs and c is the length of the street in furlongs.

// Output format
// For each test case, output on a separate line, the minimum price to pave streets such that all main buildings in the town are connected. You can assume that the result will be smaller than 2^32.

// Constraints
// 1 <= T <= 100

// p is a positive integer

// 1 <= n <= 1000

// 1 <= m <= 300000

// Sample Input 1
// 1

// 2 5 7

// 1 2 1

// 2 3 2

// 2 4 6

// 5 2 1

// 5 1 3

// 4 5 2

// 3 4 3

// Sample Output 1
// 12

// Explanation 1
// We have 5 buildings and 7 streets with the below length of streets in furlongs.

// Image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_COBBLEDSTREETS_image_0.png

/**
 * @param {number} n
 * @param {number} p
 * @param {number[][]} edges
 * @return {number}
 */

function cobbledStreets(n, p, edges) {
    class UnionFind {
        constructor(size) {
            this.parent = new Array(size).fill(0).map((_, idx) => idx);
            this.rank = new Array(size).fill(0);
        }

        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }

        union(x, y) {
            let rootX = this.find(x);
            let rootY = this.find(y);

            if (rootX !== rootY) {
                if (this.rank[rootX] > this.rank[rootY]) {
                    this.parent[rootY] = rootX;
                } else if (this.rank[rootX] < this.rank[rootY]) {
                    this.parent[rootX] = rootY;
                } else {
                    this.parent[rootY] = rootX;
                    this.rank[rootX]++;
                }
            }
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    let uf = new UnionFind(n + 1); // Union-Find for n buildings (1-indexed)
    let minCost = 0;
    let edgesIncluded = 0;

    for (let i = 0; i < edges.length; i++) {
        let [a, b, c] = edges[i];
        if (uf.find(a) !== uf.find(b)) {
            uf.union(a, b);
            minCost += c;
            edgesIncluded++;
            if (edgesIncluded === n - 1) break; // Found the MST
        }
    }

    return minCost * p;
}