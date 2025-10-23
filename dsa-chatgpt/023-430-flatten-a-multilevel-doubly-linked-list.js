// 430. flatten-a-multilevel-doubly-linked-list

/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
    let curr = head
    let stack = []

    while (curr) {
        // store nexts in stack if child exist. append child on tail
        if (curr.child) {
            if (curr.next) {
                stack.push(curr.next)
            }

            curr.next = curr.child
            curr.child.prev = curr
            curr.child = null
        }

        // when we reach curr ll end and stack has a next node, 
        // append it at tail
        if (!curr.next && stack.length > 0) {
            const next = stack.pop()
            curr.next = next
            next.prev = curr
        }

        // move curr ahead
        curr = curr.next
    }

    return head
};
