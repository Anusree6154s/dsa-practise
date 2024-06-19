// Problem Description
// Given a list of points on the 2-D plane and an integer K. The task is to find K closest points to the origin and print them.

// The distance between two points on a plane is the Euclidean distance.

// You may return the answer in any order.

// Input format
// First line contains 2 integers N, K - Number of points and the integer K.

// Next N lines contain 2 integers x, y - The coordinates of the points.

// Output format
// Print K lines each containing the coordinates of the closest points.

// Sample Input 1
// 5 3

// 1 0

// -4 2

// 2 -3

// 3 5

// 0 2

// Sample Output 1
// 1 0

// 2 -3

// 0 2

// Explanation
// Distances of points are:

// Point (1,0) = sqrt(1)

// Point (-4,2) = sqrt(20)

// Point (2,-3) = sqrt(13)

// Point (3,5) = sqrt(34)

// Point (0,2) = sqrt(4)

// Points (1,0), (0,2) and (2,-3) have the least distance from the origin.

// Constraints
// 1 <= N <= 10^5

// 1 <= K <= N

// -10^6 <= Xi, Yi <= 10^6

function kClosestPointsToOrigin(points, k) {
    // to find the first k elements if sorted in ascending order . which mean last k elements of maxheap 

    

    class maxHeap {
        //1. constructor
        //2. get parent, left and right child
        //3. insert, remove, peek, swap, size
        //4. heapify up, heapify down

        constructor() {
            this.heap = []
        }

        getParentIndex(i) {
            return Math.floor((i - 1) / 2)
        }

        getLeftChildIndex(i) {
            return 2 * i + 1
        }

        getRightChildIndex(i) {
            return 2 * i + 2
        }

        insert(val) {
            this.heap.push(val)
            console.log(this.heap)
            if (this.size() > 1) this.heapifyUp();
        }
        remove() {
            const first = this.peek();
            const last = this.heap.pop();
            if (this.size() > 0) {
                this.heap[0] = last;
                console.log(this.heap)
                this.heapifyDown();
            }
            return first;
        }
        peek() {
            return this.heap[0]
        }
        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }
        size() {
            return this.heap.length
        }

        heapifyUp() {
            //for maxHeap: bring the largest to the top
            //statring from teh end, comparing itself to its own parent, and swapping if necssary

            //start from end of array
            //compare self with its own parent(i-1/2)
            //swap if neccesary
            //new self is its parent

            //iterating from parent of last to first of array
            let self = this.size() - 1;
            console.log(this.heap)
            console.log(self)
            for (let ownParent = this.getParentIndex(self); ownParent >= 0; self = ownParent, ownParent = this.getParentIndex(self)){
                if (this.heap[self][0] > this.heap[ownParent][0]) {
                    this.swap(self, ownParent);
                } else {
                    break;  // If no swap is needed, the heap property is satisfied
                }
            }
            console.log(this.heap)
    }
    heapifyDown() {
        //for maxHeap: move any parent who is larger than its child

        //start from beginnning to end
        //check if parent larger than left child or right child
        // if yes swap and larger child will be next parent
        //if no child larger than parent, then break
        let largest = 0
        console.log(this.heap)
        for (let parentIndex = 0; parentIndex < this.size(); parentIndex = largest) {
            let leftChildIndex = this.getLeftChildIndex(parentIndex)
            let rightChildIndex = this.getRightChildIndex(parentIndex)

            // Check if the left child is within bounds and is larger than the current largest
            if (leftChildIndex < this.size() && this.heap[leftChildIndex][0] > this.heap[largest][0]) {
                largest = leftChildIndex;
            }

            // Check if the right child is within bounds and is larger than the current largest
            if (rightChildIndex < this.size() && this.heap[rightChildIndex][0] > this.heap[largest][0]) {
                largest = rightChildIndex;
            }

            if (largest == parentIndex) break
            this.swap(largest, parentIndex)
        }
    }
}

//points is amatrix with arrays of length 2
// euclidean dist form orign = sqrt[(a^2)+(b^2)]
let heap = new maxHeap()
for (let point of points) {
    let dist = Math.floor(Math.sqrt((point[0] ** 2) + (point[1] ** 2)))
    console.log(dist)
    heap.insert([dist, point])
    console.log(heap.heap)
    if (dist > k) {
        console.log(heap.heap)
        heap.remove()
        console.log(heap.heap)
    }
    console.log(heap.heap)
}

console.log(heap)
return heap.heap.map(item => item[1])
}


let points = [[1, 0], [-4, 2], [2, -3], [3, 5], [0, 2]]
let ans = kClosestPointsToOrigin(points, 3)
console.log(ans)

