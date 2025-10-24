// 142. linked-list-cycle-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let hasCycle = false

    // find the meeting point
    let slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            hasCycle = true
            break
        }
    }

    if(!hasCycle) return null

    // find start of cycle
    let p1 = head
    let p2 = fast // fast is already at meeting point
    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }

    return p1
};
