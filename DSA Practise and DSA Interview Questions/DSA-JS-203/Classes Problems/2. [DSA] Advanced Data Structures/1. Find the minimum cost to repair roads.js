// Problem Description
// There are N cities and roads between some of the cities. Most of the roads have been damaged due to rains. We have to repair the roads to connect the cities again. There is a fixed cost to repair a particular road. Find the minimum cost to connect all the cities by repairing the roads.

// Note: If the cost of repairing a road is 0, that means it is not damaged.

// Input format
// First-line contains two space-separated numbers N and M where N denotes the number of cities and M denotes the number of roads, respectively. (Cities are numbered from 1 to N)

// Next M lines contain three space-separated numbers U V and W, where U and V denote the city numbers between which the road exists and W denotes the cost to repair that road.

// Output format
// Print out one number denoting the minimum cost to connect all the cities.

// Constraints
// 1 <= N <= 1000

// 0 <= M <= MIN(N*(N+1)/2,100000)

// 1 <= U,V <= N

// 0 <= W <= 1000

// Sample Input 1
// 6 7

// 1 2 1

// 1 3 1

// 1 4 100

// 2 3 1

// 4 5 2

// 4 6 2

// 5 6 2

// Sample Output 1
// 106

// Explanation 1
// We have 6 cities and 7 roads. The minimum set of roads that need to be fixed to connect all the cities are shown below. Any such combination with minimum cost will add up to 106.

// image: https://storage.googleapis.com/crio-content-container-assets/ME_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_ME_PS_DS_CONCEPT_ADVANCED_DS_MODULE_MINCOSTOFROAD_image_0.png

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function minCostOfRoad(n, edges) {
    //Minimum Spanning Tree (MST) in a graph - Kruskal's algorithm
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

    let uf = new UnionFind(n + 1); // Union-Find for N cities (1-indexed)

    let minCost = 0;
    let edgesIncluded = 0;

    for (let i = 0; i < edges.length; i++) {
        let [U, V, W] = edges[i];
        if (uf.find(U) !== uf.find(V)) {
            uf.union(U, V);
            minCost += W;
            edgesIncluded++;
            if (edgesIncluded === n - 1) break; // Found the MST
        }
    }

    return minCost;
}