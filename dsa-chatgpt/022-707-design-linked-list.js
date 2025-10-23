// 707. design-linked-list


var MyLinkedList = function () {
    this.head = null
    this.tail = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1

    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }

    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new ListNode(val)

    if (!this.head) {
        this.head = this.tail = newNode
    } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new ListNode(val)
    if (!this.tail) {
        this.head = this.tail = newNode
    } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (index < 0 || index > this.size) return
    if (index == 0) { this.addAtHead(val); return }
    if (index == this.size) { this.addAtTail(val); return }


    let curr = this.head
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }

    const node = new ListNode(val)
    node.next = curr.next
    node.prev = curr
    curr.next.prev = node
    curr.next = node

    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index >= this.size) return

    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }

    if (curr.prev) { curr.prev.next = curr.next } else { this.head = curr.next }
    if (curr.next) { curr.next.prev = curr.prev } else { this.tail = curr.prev }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
