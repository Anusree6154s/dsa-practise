// 622. design-circular-queue

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = new Array(k)
    this.capacity = k
    this.front = 0  //index postions for removing/adding values
    this.rear = 0 //index postions for removing/adding values
    this.count = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    this.count++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false
    // we dont pop anything in circular queue.
    //  only move pointer away
    this.front = (this.front + 1) % this.capacity
    this.count--
    return true

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1
    return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1
    return this.queue[(this.rear - 1 + this.capacity) % this.capacity]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.count === this.capacity
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
