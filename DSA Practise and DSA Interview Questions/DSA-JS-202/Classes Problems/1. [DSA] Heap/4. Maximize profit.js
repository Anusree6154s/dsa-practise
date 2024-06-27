// Problem Description
// Given an array A, where A[i] is the number of vacant seats in the ith row in a stadium.

// There are B people in a queue waiting to buy the tickets.

// Each seat costs equal to the number of vacant seats in the row it belongs to.

// The task is to maximize the profit by selling the tickets to B people.

// NOTE: If all the tickets are sold then rest have to go empty handed.

// Input format
// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Print answer in a single line

// Sample Input 1
// 2 3

// 2 3

// Sample Output 1
// 7

// Explanation
// First ticket will be for any seat of second row will be sold for Rs 3.

// Second ticket will be for any seat of second row which will be sold for 2 because only 2 seats were left in the second row at that time.

// Third ticket will be for any seat in first row will be sold for 2.

// Constraints
// 1 <= N <= 100000

// 1 <= |A| <= 100000

// 1 <= B <= 200000

function maxKProfit(n, b, a) {
    //a= matrix of tickets with each row being tickets for one row of seats. each seat cost as much as seats are left
    //b= total people to sell the tickets to

    //first seat of every row cost more, then next seat, etc
    //to get max profit, we will sell first seats of every row

    //we will use max heap to get b no of large elements in the matrix

    class maxHeap {
        constructor() {
            this.heap = []
        }

        getParentIndex(i) {
            return Math.floor((i - 1) / 2)
        }
        getLeftChildIndex(i) {
            return 2 * 1 + 1
        }
        getRightChildIndex(i) {
            return 2 * i + 2
        }

        insert(val) {
            this.heap.push(val)
            if (this.size() > 1) this.heapifyUp()
        }
        remove() {
            if (this.size() == 0) return null
            if (this.size() == 1) return this.heap.pop()
            let min = this.peek()
            this.heap[0] = this.heap.pop()
            this.heapifyDown()
            return min
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
            //start from last to first of array
            //star from self index, if sel> parent, swap and new self is parent, and new paretn is its parent
            //do till parent <=self, and parent<0
            let selfIndex = this.size() - 1
            let parentIndex = this.getParentIndex(selfIndex)
            while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[selfIndex]) {
                this.swap(parentIndex, selfIndex)
                selfIndex = parentIndex
                parentIndex = this.getParentIndex(selfIndex)
            }
        }
        heapifyDown() {
            //start from frist to last
            //start from paretn, get a largest variale,  get left and rihgt child, compare both, store new largest
            //if parent still = largest, break, else swap and largest is new parent
            let parentIndex = 0
            let largest = 0
            while (parentIndex < this.size()) {
                let leftChildIndex = this.getLeftChildIndex(parentIndex)
                let rightChildIndex = this.getRightChildIndex(parentIndex)

                if (leftChildIndex < this.size() && this.heap[leftChildIndex] > this.heap[parentIndex]) largest = leftChildIndex
                if (rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[parentIndex]) largest = rightChildIndex

                if (largest == parentIndex) {
                    break
                } else {
                    this.swap(parentIndex, largest)
                    parentIndex = largest
                }
            }
        }
    }

    //store all first seats of all rows
    let heap = new maxHeap()
    for (let i = 0; i < n; i++) {
        heap.insert(a[i])
    }

    //populate other values of array
    let profit = 0
    for (let i = 0; i < b; i++) {
        let val = heap.remove()
        profit = profit + val
        if (val - 1 > 0) heap.insert(val - 1)
    }

    return profit

}

let [n, b] = [2, 3]
let a = [2, 3]
let result = maxKProfit(n, b, a)
console.log(result)
