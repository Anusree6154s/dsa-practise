// Problem Description
// Mukesh is a factory worker who works in a city which is far from his home. Because of the pandemic he has lost his job. So, he decided of going back to his city. There are N cities which are connected by some number of busses, trains and flights. Since Mukesh has lost his job he doesn’t wants to spend a lot of money in travelling. So he decided to go by bus. You are given an array bus where bus[i] = [fromi, toi, pricei] indicates that there is a bus from city fromi to city toi with cost pricei. He can change the bus at most k times. You are also given three integers, src (the city where he works), dest (the city where he wants to go) and an integer k. Since Mukesh doesn’t wants to spend to much money, print the cheapest price from src to dest with at most k stops. If there is no such route, print -1.

// Input format
// Given an integer N.(Number of cities)

// Given an integer M.(Number of busses)

// Next N lines contains 3 integers each.(Bus from cityi to cityj with a cost of x).

// Next line conatins 3 integers. (src,dest,k).

// Output format
// An integer.

// Sample Input 1
// 3

// 3

// 0 1 100

// 1 2 100

// 0 2 500

// 0 2 1

// Sample Output 1
// 200

// Explanation
// The optimal path with at most 1 stop from city 0 to 2 is city0 to city1 then city1 to city2 cost 100 + 100 = 200.

// Sample Input 2
// 3

// 3

// 0 1 100

// 1 2 100

// 0 2 500

// 0 2 0

// Sample Output 2
// 500

// Explanation
// We cannot take any stop, So we need a bus which goes directly from city0 to city2. The cost in this case will be 500.

// Constraints
// 1 <= N<= 100

// 0 <= M<= (N * (N - 1) / 2)

// bus[i].length == 3

// 0 <= fromi, toi < n

// fromi != toi

// 1 <= pricei <= 10000

// There will not be any multiple busses between two cities.

// 0 <= src, dest, k < n

// src != dest


function pandemic(N, M, bus, src, dest, K) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        insert([cost, city, stops]) {
            this.heap.push([cost, city, stops]);
            this.bubbleUp();
        }
        extractMin() {
            if (this.heap.length === 1) return this.heap.pop();
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();
            return min;
        }
        bubbleUp() {
            let index = this.heap.length - 1;
            const element = this.heap[index];
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];
                if (element[0] >= parent[0]) break;
                this.heap[index] = parent;
                index = parentIndex;
            }
            this.heap[index] = element;
        }
        bubbleDown() {
            let index = 0;
            const length = this.heap.length;
            const element = this.heap[index];
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIndex < length) {
                    leftChild = this.heap[leftChildIndex];
                    if (leftChild[0] < element[0]) swap = leftChildIndex;
                }
                if (rightChildIndex < length) {
                    rightChild = this.heap[rightChildIndex];
                    if (
                        (swap === null && rightChild[0] < element[0]) ||
                        (swap !== null && rightChild[0] < leftChild[0])
                    ) swap = rightChildIndex;
                }
                if (swap === null) break;
                this.heap[index] = this.heap[swap];
                index = swap;
            }
            this.heap[index] = element;
        }
        isEmpty() {
            return this.heap.length === 0;
        }
    }

    const adjList = Array.from({ length: N }, () => []);
    for (const [from, to, price] of bus) {
        adjList[from].push([to, price]);
    }

    const minHeap = new MinHeap();
    minHeap.insert([0, src, 0]);

    while (!minHeap.isEmpty()) {
        const [cost, city, stops] = minHeap.extractMin();
        if (city === dest) return cost;
        if (stops <= K) {
            for (const [nextCity, price] of adjList[city]) {
                minHeap.insert([cost + price, nextCity, stops + 1]);
            }
        }
    }

    return -1;
}