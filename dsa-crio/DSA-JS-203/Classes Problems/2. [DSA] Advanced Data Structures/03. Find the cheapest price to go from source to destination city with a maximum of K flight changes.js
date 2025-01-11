// Problem Description
// You are given a list of cities and flights that operate between the cities, along with their price. You are also given a source city and a destination city. Your task is to find the cheapest price to go from source to destination city with a maximum of K flight changes. If there is no such route, output -1.

// Note: The flights are not bidirectional.

// Note: There will not be any duplicated flights or self cycles.

// Input format
// The first line contains two space separated integers, N and M, where N is the number of cities and M is the number of flights, respectively. Cities are numbered from 1 to N.

// The next M lines have three space separated integers, U, V and W. The flight goes from city numbered U to city numbered V and W is the price for the flight.

// The next line will contain 3 space separated integers U, V and K. U and V represent the source city number and destination city number, while K represents the maximum number of flight changes.

// Output format
// Single value representing the minimum price of flights to go between the two cities.

// Constraints
// 1 <= N <= 100,

// 0 <= M <= N * (N - 1) / 2

// 1 <= W <= 10000

// 0 <= K <= N - 1

// Sample Input 1
// 3 3

// 1 2 100

// 2 3 100

// 1 3 500

// 1 3 1

// Sample Output 1
// 200

// Explanation 1
// We have to find the cheapest set of flights to go from City 1 to City 3 with a maximum of 1 stop in between.

// The cheapest among the given options is to take the flight from City 1 to City 2 at price 100 and another flight from City 2 to City 3 at price 100, total being a price of 200. The other option of going directly from City 1 to City 3 is priced at 500, which is more expensive.

/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @return {String}
 */

function cheapestFlights(n, flights, src, dst, k) {
    const adj = new Map();
    const visited = new Array(n+1).fill(Number.MAX_VALUE);
    visited[src] = 0;

    for (const [from, to, price] of flights) {
        if (!adj.has(from)) {
            adj.set(from, []);
        }
        adj.get(from).push([to, price]);
    }

    const queue = [[src, 0]];
    k++;

    while (k-- > 0 && queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [currNode, currPrice] = queue.shift();
            if (adj.has(currNode)) {
                for (const [nextNode, nextPrice] of adj.get(currNode)) {
                    const newPrice = currPrice + nextPrice;
                    if (newPrice < visited[nextNode]) {
                        visited[nextNode] = newPrice;
                        queue.push([nextNode, newPrice]);
                    }
                }
            }
        }
    }

    return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];

}