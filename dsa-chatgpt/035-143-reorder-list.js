// 143. reorder-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // split the list from middle
    // reverse the second list and split it fro original
    // insert from second into first
    // no need to return anything

    // find middle
    let slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half
    let prev = null
    let curr = slow.next
    slow.next = null
    while (curr) {
        let next = curr.next
        curr.next = prev

        prev = curr
        curr = next
    }

    //attach second nodes in between first nodes
    let head1 = head;   // first half
    let head2 = prev;   // reversed second half

    while (head1 && head2) {
        let tmp1 = head1.next; // store next nodes
        let tmp2 = head2.next;

        head1.next = head2;    // link first -> second
        head2.next = tmp1;     // link second -> next of first

        head1 = tmp1;          // move to next nodes
        head2 = tmp2;
    }
};
