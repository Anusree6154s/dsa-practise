// 024. swap-nodes-in-pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head

    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let curr = head
    while (curr && curr.next) {
        let next = curr.next
        prev.next = next
        curr.next = next.next
        next.next = curr

        prev = curr
        curr = curr.next // not doing curr=next bcz
        // previous next was based on prev curr
    }

    return dummy.next
};
