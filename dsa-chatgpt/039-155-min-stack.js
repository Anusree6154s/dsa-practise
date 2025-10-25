// 155. min-stack


var MinStack = function () {
    this.stack = []
    this.minStack = [] //keeps track of minimum
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    //push to stack as well as to minStack(if val is smaller 
    // than existing one)
    this.stack.push(val)
    if (val <= this.minStack[this.minStack.length - 1] || this.minStack.length === 0) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // pop from stack (and minStack if same value in minStack)
    // doesnt have to pop the smallest or anything like that
    let removed = this.stack.pop()
    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // return last pushed value irrespective of smaller or larger
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // return smallest
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
